import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/docupuncture';
const npm = 'https://www.npmjs.com/package/docupuncture';

export default defineFilepressConfig({
	title: 'Docupuncture',
	description:
		'Needles for live Google documents. Insert only the change; the rest of the file stays intact.',
	tagline: 'Needles for live Google documents.',
	lede: 'Stop regenerating. Start patching.',
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
