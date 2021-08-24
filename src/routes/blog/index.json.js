export async function get() {
	const modules = import.meta.glob('./*.md');

	let posts = [];

	for (const path in modules) {
		const post = await modules[path]();
		posts.push(post.metadata);
	}

	// Sort posts by descending date
	posts.sort((a, b) => (a.date > b.date ? -1 : 1));

	return {
		body: { posts }
	};
}
