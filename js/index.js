const API_URL = 'http://localhost:3000/api/posts';
const API_BASE_URL = 'http://localhost:3000/';

window.onload = () => {
	getPosts();
};

const getPosts = () => {
	fetch(API_URL, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			buildPosts(data);
		});
};

const buildPosts = (blogPosts) => {
	let blogPostsContent = '';
	for (blogPost of blogPosts) {
		const postImage = `${API_BASE_URL}${blogPost.image}`;
		const postLink = `/dansmith/post.html?id=${blogPost.id}`;
		blogPostsContent += `
            <a class="post-link" href=${postLink}>
                <div class="post">
					<img
						class="post-image"
						src=${postImage}
						alt="blog post"
					/>
					<div class="post-content">
						<div class="post-date">${blogPost.date_added}</div>
						<div class="post-title">${blogPost.title}</div>
						<div class="post-text">
							${blogPost.content}
						</div>
					</div>
				</div>
            </a>
            `;
	}
	document.querySelector('.blog-posts').innerHTML = blogPostsContent;
};
