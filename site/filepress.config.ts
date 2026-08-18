import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/docupuncture';
const npm = 'https://www.npmjs.com/package/docupuncture';

export default defineFilepressConfig({
	title: 'Docupuncture',
	description:
		'In-place edits for live Google Docs, Sheets, and Slides. Treat the file you already have; theme, comments, and history stay.',
	tagline: 'Treat the document you already have.',
	lede: 'Insert only the change. Theme, comments, and history stay.',
	url: 'https://docupuncture.com',
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
