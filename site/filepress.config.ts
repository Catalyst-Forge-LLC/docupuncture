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
		{ label: 'SkillFacts · docupuncture-docs', href: 'https://skillfacts.dev/v#sf1.eNqdUrFuGzEM_RVBs8-OO3oLXLRLAgToGASGLNF3gnWkQFKXBkH-vdQBRj106iY9Uo_vPerTL_6w33gMM_iDTxRbbRi1MQx2Eb_xCRYoVIGtfgwayoeo-0E8ghUXYMmEVnrY7rd7Q0SDNjEgRM1L7yk5Akqnf6whTjB82z4YfM2YDIuNhXiQay7F0Nq40tr8whCzgMs41BIiOEhZxSm5gA5-Z9GMo_tJNBZw3ym6JQdXgygMAdPADd1jreJ-Rc5VOzXTAhgwGvunF2rcT35SrXLY7casUztvI827m81htTk8PR1398msMs8ly_SvUL42PqMoN_NPKCcGM71OnMAsHjwSdgoEfSe-GpDnWjIkwy65gBgVzLc-Y1Oi0mkuwGDiLbRXf7PNFrF7Pr44m5JO_fkpEiqg-reNPzdMBdIpsOaL7cPW8mowjAwiXZJCgRmUP_7KStCDDav23m4CJpqhhvE-rPs4tvZD7CGDLS4rrWT_FaplhjFod2hH-PoDAGXqTA' },
		{ label: 'SkillFacts · docupuncture-sheets', href: 'https://skillfacts.dev/v#sf1.eNqtk8Fu20YQhl9lwFxiwZRlH4pie0rtOgjiBAZktAfREFbkWFyY2iV2l1KFNM_Ve5-sM0NSpG0ZTYPAECzNzM7O_Pt_X5Jtos5PE6s3mKikcHlTNzaPjcc0lIgxJKdJgVusXI2eKi511NU-RLh2fo2U3KIPxllKzabn03OKhKhjEyig82i2XFOZHG3gC97VOi8xvZjOKPxobEGxvPHB-TQ8mqqiaN342knxrcfcBARj07rSOQIWJgaIDrQF_NOEaOwa3ju3rhDmPC1sjYZah4iptkXqGwvv6jrAPPemjtzcuy1abXPq_yUJrvH8LSljrIM6O1ubWDarae42Z_2iqSya3txcno3VkUFXlSGRjsjy9TQxNkTfkALOhqVHWltuLJGWVIl1lltYjDvnHylgNnVlsKDYg6kwUCvc9HXULTpXcZsH9EjDk2yLpFv8ypPI8OnyFuiWYsnHl7mzEW1M7k-TVWOLCoul9tE80IvQwywojGuPIfBIESvcYPT7YawCWVots3M5DVC6DdZ6PRZrLMeUPEIHPdLTmeik2XeJ6vWOjqZpmlkxxFJmXnYuU5CJzWZZkln2rIIjls3swbEKnr5MZp91OudOrWMVtIbNbOdXBYNdM8tuVTA2a2Y7r3KzH21WnqsXXcFrmmd2kHyo-nbFaYUDESqzAC0S39cK4IDES91f8tDex0AoYOPxzw4IBR0PHBuA6Oue0yCdUvhvIDL7Agc5u7jPbEuE_DwgMQw2RkJJ_Roteh272wv6puBidvFTOvs5vZhxrKtwpEbJL6ybWDrPS-Ve3KFGVTTTjrQelBeLyYjtQwOsGlPF5WrPdnsqLy3fH9vtdtO8Sz5wTt6O3SRQZfYNzLkzXHNrOngUoMz-BfRH_-iUfDgymVz1YE0mlH82RFfze0uYVAhifWIumEm8Ja1P3LS8SWZArs9-JPAkNWaPk5md3LGRMIzBIaSixGKJ0AT0QGQF4rL3xx9ksEC34C9QOhqenbLRe3FLZ57OLtOJCPYGblvO-dcP57y74YDha-LPhUxK_H80WyVveziPvpxM8WEEKQikr07D3FKc-Wjbf27RpVjHbhu-PtA7qpbL7phiGCjm8LdBLMd_bUmGA8kcf8s3nHQVvwnRr21w10P-ZIurEeeUaPu1Iws_k_c9rsC4wkJgEpbu3x5H9wT--ZumJXZhtYfFU-mHQ8fBPSELJl__BdwOb3U' },
		{ label: 'SkillFacts · docupuncture-slides', href: 'https://skillfacts.dev/v#sf1.eNq1k8Fu20YQhl9lwFxiwZRlH4pie0rtOgjiBAZktAfREFbkWFyY2iV2l1KFNM_Ve5-sM0NSpG0ZTQMEhmBpZnZm9t__-5JsE3V-mli9wUQlhcuburF5bDymoTIFhuQ0KXCLlavRU8WljrrahwjXzq-Rklv0wThLqdn0fHpOkRB1bAIFdB7Nlmsqk6MNPOBdrfMS04vpjMKPxhYUyxsfnE_Do6kqitaNr50U33rMTUAwNq0rnSNgYWKA6EBbwD9NiMau4b1z6wphLttCgfkjbI2GWoeIqbZF6hsL7-o6wDz3po48wrstWm1zmvIlCa7x_C0pY6yDOjtbm1g2q2nuNmf9dVO5bnpzc3k21kjWXVUmlMfE-XqaGBuib0gHZ8PSI11eJpZIV1WJdZZbWIw75x8pYDZ1ZbCg2IOpMFAr3PR11C06V3GbB_RIy5N4i6S7_pUnqeHT5S3QlGLJx5e5sxFtTO5Pk1VjiwqLpfbRPNC70PMsKIxrjyHwShEr3GD0-2EtkpME1rI7l9MCpdtgrddjscZyTMkpdNAjPaCJTpp9l6he7-homqaZFVssZedl5zUFmZhtliWZZecqOGLczB58q-Dpy2T2Wadz7tT6VkFr28x2rlUwmDaz7FkFY8tmtnMsN_sxluXteukVvKZ8Zgfhh6pv150ucuBCZRagBeP7WgEcwHip_ksq2nmMhQK2H__ssFDQUcGxAYu-7jkT0imF_8Yisy-gkLOL-8y2XMjPAxjDYmMwlNSv0aLXsZte0DcFF7OLn9LZz-nFjGNdhSM1Sn5h3cTSeb5U7sUjalRFO-1I60F5MZqs2D40wKoxVVyu9my6p_LS5ftju91umnfJB87J27GbBK3MvoE5d4Zrbk0Hj2KU2b-A_ugfnZIPRyaTqx6vyYTyz5boan5vOZMKAa1PzAU2ibe89YmbljrJDOD12Y-En6TGBHIys5M7NhLxNAKHkIoSiyVCE9ADkRWIzt4ff5DBAk3BX6B0tDw7ZaP34pbOPJ1dphMR7A3ctrTzrx9EezfnAONrTzAXPinx_wFt9bztET36frLFhxGqIKi-ug3TS3GmpG3_uQWYYh3Bbfj6wPCoWobdMcswsMzhb0NZjv_a8gwHnjn-liecdBW_Cdev3eCuR_3JLa5GtFOi7deuLBRN3vfQAkMLC0FKiLp_exzgE_jnb9qWCIbVHhZPpR8OHcf3hIyYfP0XCNx1ww' }
	],
	topics: []
});
