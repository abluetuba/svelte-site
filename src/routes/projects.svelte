<script>
	const projects = [
		{
			title: 'ISS Tracker',
			description: 'A website that tracks the location of the International Space Station',
			links: ['https://msnctrl.netlify.app', 'https://github.com/abluetuba/mission-control'],
			image: '/iss.jpg'
		},
		{
			title: 'unoXdue',
			description: 'A website that shows the results of the Serie A (Italian football league)',
			links: ['https://unoxdue.netlify.app', 'https://github.com/abluetuba/unoxdue'],
			image: '/unoxdue.jpg'
		},
		{
			title: 'unoXdue - flutter',
			description: 'Flutter version of unoXdue',
			links: ['https://github.com/abluetuba/unoxdue-flutter'],
			image: '/scores.jpg'
		}
	];
</script>

<svelte:head>
	<title>tuba's projects</title>
</svelte:head>

<h1>Projects</h1>
<main>
	{#each projects as { title, description, links, image }}
		<div>
			<h3>{title}</h3>
			<p>{description}</p>
			{#each links as link}
				<p><a href={link}>{link}</a></p>
			{/each}
			<img src={image} alt="" width="300" />
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
	main div {
		padding-right: 0.5rem;
	}
</style>
