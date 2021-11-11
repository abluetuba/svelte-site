export async function get() {
	const modules = import.meta.glob('./*.svx');
	let posts = [];

	console.log(modules);

	for (const path in modules) {
		const post = await modules[path]();
		posts.push(post.metadata);
	}

	posts.sort((a, b) => (a.date > b.date ? -1 : 1));

	return {
		headers: { 'Cache-Control': 'max-age=0, s-maxage=3600', 'Content-Type': 'application/xml' },
		body: `<?xml version="1.0" encoding="UTF-8" ?>
		<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
		<channel>
		<atom:link href="https://tuba.dev/blog/rss" rel="self" type="application/rss+xml" />
		<title>tuba'sblog</title>
		<link>https://tuba.dev/blog</link>
		<description>tuba's blog - tuba.dev</description>
		${posts
			.map(
				(post) => `<item>
		<guid>https://tuba.dev/blog/${post.slug}</guid>
		<title>${post.title}</title>
		<link>https://tuba.dev/blog/${post.slug}</link>
		<description>${post.excerpt}</description>
		<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		</item>`
			)
			.join('')}
		</channel>
		</rss>`
	};
}
