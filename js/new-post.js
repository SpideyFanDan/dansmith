const API_URL = 'http://localhost:3000/api/posts';

const submitNewPost = () => {
	const title = document.getElementById('form-post-title').value;
	const content = document.getElementById('form-post-content').value;
	const category = document.getElementById('form-post-category').value;
	const location = document.getElementById('form-post-location').value;
	const date = document.getElementById('form-post-date').value;
	let input = document.querySelector('input[type="file"]');

	let data = new FormData();
	data.append('image', input.files[0]);
	data.append('title', title);
	data.append('content', content);
	data.append('location', location);
	data.append('date_added', date);
	data.append('category', category);
	fetch(API_URL, {
		method: 'POST',
		body: data,
	}).then(() => {
		setTimeout(() => {
			window.location.href = 'blog.html';
		}, 1000);
	});
};
