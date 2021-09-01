<script>
	export let title;
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
	<h1>{title}</h1>
	<div>{new Date(date).toLocaleDateString()}</div>

	<slot />
</article>
