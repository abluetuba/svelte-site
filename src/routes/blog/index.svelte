<script context="module">
	export async function load({ page, fetch, session, context }) {
		const res = await fetch('/blog/posts.json');

		if (res.ok) {
			return {
				props: {
					posts: await res.json().then((data) => data.posts)
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not load posts')
		};
	}
</script>

<script>
	export let posts = [];
</script>

<svelte:head>
	<title>tuba's blog</title>
</svelte:head>

<h1>blog</h1>
<a href="/blog/rss.xml" rel="external">rss</a>
<ul>
	{#each posts as { slug, title, date, excerpt }}
		<li>
			<a href={`/blog/${slug}`}>{title}</a>
			<span>{new Date(date).toLocaleDateString()}</span>
			<p>{excerpt}</p>
		</li>
	{/each}
</ul>

<style>
	h1 {
		display: inline-block;
	}
	ul {
		list-style: none;
		padding-left: 0;
	}

	ul li p {
		margin-top: 0.5rem;
	}

	ul li span {
		color: gray;
		font-style: italic;
	}
</style>
