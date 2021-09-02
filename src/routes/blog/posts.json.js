export async function get() {
	const modules = import.meta.glob('./*.svx');

	let posts = [];

	for (const path in modules) {
		const post = await modules[path]();
		posts.push(post.metadata);
	}

	posts.sort((a, b) => (a.date > b.date ? -1 : 1));

	return {
		body: { posts }
	};
}
