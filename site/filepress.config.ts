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
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNpVkUFLAzEQhf_K8s5pi9dcC4JSvdibiKTZaRrNzoRkUllK_7ukVam3YeZ98yYvJxxh7wzYTQSLUXzLjb22QjDQOffuJCyFssCgqtNWYeG8xmPXpOiJa5c9PWyvCv8Je0JyHJoLffLoju7Fl5jVDNs507WGQWms8eL8LCMtPyoMDlI1coDFOkkb98kVwtlgpFxhX09gWATSfUyUC9XOZFjsSf1hKDSJ0tCHgxdWYsXZXKGv4jgkKj_ASDnJPBHroCJp2EsZ_I3lm0E9-j_Lm2sMCuzvoReuB9c3OY3CQ4165XctprGHkZ3_dIHeJ8cuUKcz5wkGPsKChS9P7CHXqFLmvl41V7tahaiHtlt6mVZrpy7NVRf3UgItNpv16t-Pnb8BxMCe5g' },
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqtk1FP20gQx7_KyH0pEQ6Bh9Np-9TCUZ2OOyGBrg8xijb2EK9wdq3ddXJRj8_V936ymxnbsYGg9qoKIfDM7OzMf_-_z8kmUafHidVrTFRSuLypG5vHxmNKHyE5TgrcYOVq9JQ_11FXuxDh0vkVUnKDPhhnKTWbnk5PKRKijk2ggM6j2XBNZXK0gdu_r3VeYno2nVH4wdiCYnnjg_NpeDBVRdG68bWT4muPuQkIxqZ1pXMELEwMEB1oC_iPCdHYFXx0blUhXLgcNkZDrUPEVNsi9Y2F93Ud4Cb3po7c2rsNWm1z6v45Ca7x_F9SxlgHdXKyMrFsltPcrU_6NVNZM726Oj8ZKyNjLisTykOiPB4nxoboG9rf2bDwSEvLjSXSiiqxznILi3Hr_AMFzLquDBYUuzcVBmqF676OukXnKm5zjx5peBJtnvRre5IY_jy_BrqlWPDxRe5sRBuTu-Nk2diiwmKhfTT39B70LHMK48pjCDxSxArXGP1uGKtAFlbL7FxOA5RujbVejcUayzElh9BBj_RwJjpp9kOier2lo2maZlbssJCZF53HFGRislmWZJb9quCFXTO7d6uCp--S2Wd9TrlP61YFrVkz23lVwWDVzLJTFYyNmtnOp9zs5xqVp-oFV_Ca3pkd5B6qvl9tWmBPg8osQIvDj7UC2OPwUvWXLLT3MQwK2HT82cGgoGOBYwMMfd1zEqRTCt-GIbMvUJCz87vMtjTI5x6HYbAxDkrqV2jR69jdXtB_Cs5mZ7-ks1_TsxnHugpHapT8wrqJpfO8VO7FG2pURTNtSetBeTGYjNg-NMCyMVVcLHdstqfy0vL9se12O8275D3n5O3YTQJUZt_ADXeGS25NBw_Ak9l_gX7oD52RX45MJhc9VJMJ5Z-N0NX83dIlFYJXn7gRxCTeUtYnrlrWJDPg1mf_IOgkNeaOk5md3LKNMIyxIaCixGKJ0AT0QFwFYrJ3xyeyV6Bb8B2UjoZnn6z1TrzSWaczy3Qicr2B65Zx_vrJjHf99wi-Jv2NUEmJ_49lq-N1D-bBd5Mpfh8BCgLoq9MwsxRnNtr2f7XYUqzjtg1f7skdVctlt0wwDARz-PsAluMfWophTzHH3_INR13Fb0Lzaxvc9oA_2eJixDgl2n7tyMLO5GOPKjCqMBeQhKO7t4exPYKvX2ha4haWO5g_lX44dBjaIzJg8vgfVKhqIw' }
	],
	topics: []
});
