// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// For GitHub Pages at https://<user>.github.io/<repo>/ keep `base: '/<repo>'`.
// With a custom domain, set `site` to it and remove `base`.
export default defineConfig({
	site: 'https://richcodestudios.github.io',
	base: '/supercharger',
	integrations: [
		starlight({
			title: 'Supercharger',
			description:
				'An open-source learning platform where your AI coding assistant is the curriculum engine.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/richcodestudios/supercharger',
				},
			],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'What is Supercharger?', slug: 'introduction/what-is-supercharger' },
						{ label: 'Quickstart', slug: 'introduction/quickstart' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Generating a track', slug: 'guides/generating-a-track' },
						{ label: 'Prepare me for this job', slug: 'guides/job-prep' },
						{ label: 'Working through a lesson', slug: 'guides/lessons' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Content spec', slug: 'reference/content-spec' },
						{ label: 'Architecture', slug: 'reference/architecture' },
						{ label: 'FAQ', slug: 'reference/faq' },
					],
				},
			],
		}),
	],
});
