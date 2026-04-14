<script lang="ts">
	import ProjectCard from '../ProjectCard.svelte';

	const project_title = 'Just The Recipe';
	const project_jobname = 'A fully functioning recipe-sharing website storing data on a DB';
	const project_description =
		'This live web project implements CRUD (Create, Read, Update and Delete) operations onto a simple UI while interacting with a self-hosted PostgreSQL database. It takes advantage of many common web development technologies, including Tailwind CSS, Typescript, and utilizes the SvelteKit Framework which itself utilizes Vite.';
	const project_date = '';
	const has_link = true;

	const project_link = 'https://just-the-recipe-production.up.railway.app/';
	const link_text = 'View Website';

	const has_github = true;
	const github_link = 'https://github.com/whohensee/just-the-recipe';
</script>

<ProjectCard
	{project_title}
	{project_jobname}
	{project_description}
	{project_date}
	{has_link}
	{project_link}
	{link_text}
	{has_github}
	{github_link}
/>

<style>
</style>
