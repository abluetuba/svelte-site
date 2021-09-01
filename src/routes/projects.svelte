<script>
	const projects = [
		{
			title: 'unoXdue',
			description:
				'PWA that displays the results and the table of the Serie A (Italian football league).',
			links: ['https://unoxdue.netlify.app', 'https://github.com/abluetuba/unoxdue'],
			image: 'unoxdue.jpg'
		},
		{
			title: 'unoXdue - flutter',
			description: 'Flutter version of unoXdue',
			links: [
				'https://unoxdue-flutter.netlify.app',
				'https://github.com/abluetuba/unoxdue-flutter'
			],
			image: 'scores.jpg'
		}
	];
</script>

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
		padding-rigt: 0.5rem;
	}
</style>
