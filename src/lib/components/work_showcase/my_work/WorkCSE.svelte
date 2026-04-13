<script lang="ts">
	import ProjectCard from '../ProjectCard.svelte';
	import type { validPaths } from '$lib/types';

	const project_title = 'Image Processing Pipeline Development';
	const project_jobname = 'Computer Systems Engineer at Lawrence Berkeley National Lab';
	const project_description =
		'Software Development in Python and Javascript, creating a data-processing pipeline called SeeChange which turns raw telescope images into lightcurves and associated scientific data products. This work involved extensive test-driven development in Python, creation of a controller web-application with Flask and Javascript, and management of the PostgreSQL database and associated cloud archive. SeeChange was also containerized for deployment onto cloud services, utilizing both Docker and Podman when appropriate.';
	const project_date = 'Sept 2022 - October 2025';
	const has_link = false;

	const project_link: validPaths = '/';
	const link_text = 'Detailed Project Case Study';

	const has_github = false;
	const github_link = '';
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
