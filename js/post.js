const PORT = process.env.PORT || 3000;
const API_URL = `http://localhost:${PORT}/api/posts`;
const API_BASE_URL = `http://localhost:${PORT}/`;

window.onload = () => {
	getPost();
	getPostIdParam();
};
getPostIdParam = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get('id');
};

const getPost = () => {
	const postId = getPostIdParam();
	const url = `${API_URL}${postId}`;
	fetch(url, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			buildPost(data);
		});
};

const buildPost = (data) => {
	const postImage = `${API_BASE_URL}${data.image}`;
	document.getElementById(
		'blog-post-header'
	).innerText = `My ${data.category} Blog`;
	document.querySelector('header').style.backgroundImage = `url(${postImage})`;
	document.getElementById('individual-post-title').innerText = data.title;
	document.getElementById('individual-post-date').innerText = data.date_added;
	document.getElementById('individual-post-location').innerText = data.location;
	document.getElementById('individual-post-content').innerText = data.content;
};
