<script>
	export let title;
	export let date;
	export let excerpt;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="description" content={excerpt} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:type" content="article" />
</svelte:head>

<article>
	<h1>{title}</h1>
	<div class="date">{new Date(date).toLocaleDateString()}</div>

	<slot />
</article>

<style>
	article {
		max-width: 800px;
		margin: 0 auto;
	}
	.date {
		color: gray;
		font-style: italic;
	}
</style>
