//https://blog.stranianelli.com/svelte-et-github-english/

var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/trevorcode/SvelteWorkout.git', // Update to point to your repository
		user: {
			name: 'Trevor', // update to use your name
			email: '' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
