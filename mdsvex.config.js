const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: './src/routes/blog/post-layout.svelte',

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
