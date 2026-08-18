import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/docupuncture';
const npm = 'https://www.npmjs.com/package/docupuncture';

export default defineFilepressConfig({
	title: 'Docupuncture',
	description:
		'Insert precise edits without changing the theme, format, comments, or history.',
	tagline: 'Treat the document you already have.',
	lede: 'Insert precise edits without changing the theme, format, comments, or history.',
	url: 'https://docupuncture.dev',
	author: 'Catalyst Forge LLC',
	logo: '/logo.svg',
	ogImage: '/logo.svg',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Skills', href: '/skills' },
		{ label: 'Install', href: '/install' },
		{ label: 'Posts', href: '/writing' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'npm', href: npm },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	topics: []
});
