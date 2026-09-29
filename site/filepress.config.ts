import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/docupuncture';
const npm = 'https://www.npmjs.com/package/docupuncture';

export default defineFilepressConfig({
	title: 'DocuPuncture',
	description:
		'Targeted, reviewable Apps Script edits in an existing Google Doc, Sheet, or Slides file.',
	tagline: 'Treat the document you already have.',
	lede: 'Doc · Sheet · Slides',
	url: 'https://docupuncture.dev',
	author: 'Catalyst Forge LLC',
	logo: '/logo.png',
	ogImage: '/logo.png',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Skills', href: '/skills' },
		{ label: 'Get started', href: '/install' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'See the rest of the Catalyst Forge shelf.', href: 'https://catalystforge.com/tools/' },
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'Get started', href: '/install' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'npm', href: npm },
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNpVkUGLHCEQhf9K887uDLl6nRBI2IRA9rYswdUa26xdJVp2aIb578HpTZjcxHpfvefzghX2gwG7hWDxUXz_3tlrrwQD3cq4XYSlUhEYNHXaGyyc17QOTU6euA3Z189Pu8K_wV6QHcfu4ph8cav74WsqaqanrdB-hkHtrOnm_E0CHX41GMzSNHGExSlLD-fsKuFqEKg02OcLGBaR9JwylUptMAUWZ1I_T5UWUZrGcPLCSqy4mh36XR3HTPUdCFSybAuxTiqSp7PUyd9Zvhi01f-zvEtjUGH_Br1xQXwfm5wm4akl3fnXnnIYZRTn31ykn4tjF2nQhcsyKqamsOgcUvNZGgUY-AQLFr69e5aFyt7jrFqaPR6HW3n_pkOgdQSiIi2p1O1OF5PO_fXgZTmenLq8NX34JDXSw-Pj6b8tuP4BKRazfg' },
		{ label: 'SkillFacts · docupuncture-docs', href: 'https://skillfacts.dev/v#sf1.eNqdkDGLGzEQhf-KmFq7PqdUd_hImgsYUh6HkaXxrrBWI2ZGm5jD_z1oickVqdKpePrmve8DVnB7C8UvCA5eKLRjK0Ebo3mhIGAh4oqZKjI4OHj1-SZqvhJPCBZWZElUwMHTuB_3YEHUaxNw4IOmtWdyClik45-rDzMOX8YnsHBNJYKD0FiIB7mmnMFCbVxpCx8ZQxI0qQw1-4AGY1IxSsYXg7-SaCqT-UY05a2rWZM31Yvi4EscuBXzXKuYH4FT1Y5mWrH4EhDcBwg17i-YVau43W5KOrfzGGjZPWYO28zh9fWwixRa_WNmq3nOSeZ_SblbSEWUW9BERU6MPszbxRlzBgeFSkcU1J_EV3CQlpoTRrBwSRnlJorLI3e3oES5Yy7IWAJGcG_wmM1pRfP9cDSMPp7691OgolgU3i2cW4kZ48mzposPKuDe3i3gxCjSKylmXFD59rdWxC7Wb917_G5hpgWrnz7L-qxjjLiCBcZKkpQ22H9JVW4leO0LlRvefwPsjenf' },
		{ label: 'SkillFacts · docupuncture-sheets', href: 'https://skillfacts.dev/v#sf1.eNqdkDFrIzEQhf-KmFprx1eqCw53TQ4MKUMwsjTeFdaOxMxoExP83w8tDpfiqutUPL353vcJC7idBfIzgoOnEtqhUdDGaF4mRBWwEHHBXCoyONh79fkqan4WHhEsLMiSCoGDh81uswMLol6bgAMfNC09k1NAkn7gsfow4fBj8wAWLokiOAiNpfAgl5QzWKiNa1nDB8aQBE2ioWYf0GBMKkaL8WTwI4kmGs2vUsZ8pzVL8qZ6URw8xYEbmcdaxbwETlV7OZcFyVNAcJ8gpXF_waRaxW23Y9KpnTahzNuvocM6dHh-3m9jCa3e7aygp5xk-peWm4VEotyCpkJyZPRhWi9OmDM4oEK9glDfC1_AQZprThjBwjlllKsozl-5mwUtJfeaMzJSwAjuFe7DnzgtaH7vD4bRx2P_fgyFFEnhzcKpUcwYj541nX1QAff6ZgFHRpGOpJhxRuXrX6yIXa1f2Xv8ZmEqM1Y_fpf1Xccm4gIWGGuRpGUt-y-pyo2C175QueHtD18066U' },
		{ label: 'SkillFacts · docupuncture-slides', href: 'https://skillfacts.dev/v#sf1.eNqdkD1rIzEQhv-KmFprx1eqCw53TQ4MKUMwsjTeHayVxMxoExP83w8tMZfiquumeOf9eD5hAbezkP2M4OCphHZoOWhjNC-JIgpYiLhgKhUZHOy9-nQVNT8LjwgWFmShksHBw2a32YEFUa9NwIEPSkvXJAqYpQc8Vh8mHH5sHsDChXIEB6GxFB7kQimBhdq4llV8YAwkaCgPNfmABiOpGC3GZ4MfJEp5NL9KGdO9rYkYLmYhb6oXxcHnOHDL5rFWMS-BqWqP4LJg9jkguE-Q0rhfMKlWcdvtSDq10yaUeXufO6xzh-fn_TaW0OoXo7XuKZFM_4Jzs0BZlFtQKlmOjD5Ma-KEKYGDXHK3yKjvhS_ggOaaCCNYOFNCuYrifNfdLGgpqduckTEHjOBe4Wv-E9OC5vf-YBh9PPb3YyhZMSu8WTi1HBPGo2elsw8q4F7fLODIKNIrKSacUfn6t1bEDtiv3bv8ZmEqM1Y_fof1Hccm4gIWGGsR0rKa_RdU5ZaD175QueHtD9Jh7b8' }
	],
	topics: []
});
