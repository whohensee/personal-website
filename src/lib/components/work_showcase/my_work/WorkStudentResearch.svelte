<script lang="ts">
	import type { validPaths } from '$lib/types';
	import ProjectCard from '../ProjectCard.svelte';

	const project_title = 'Supernova Data Analysis with MOST Hosts';
	const project_jobname = 'Student Researcher at Lawrence Berkeley National Lab';
	const project_description =
		'Working as part of the MOST Hosts team, in collaboration with DESI, I wrote software in Python to identify rise, peak, and fall times of raw supernova data taken by PTF/iPTF and ZTF surveys, and performed analysis on the interesting objects utilizing new redshift measurements taken by DESI.';
	const project_date = 'June 2021 - August 2022';
	const has_link = false;

	const project_link: validPaths = '/';
</script>

<ProjectCard
	{project_title}
	{project_jobname}
	{project_description}
	{project_date}
	{has_link}
	{project_link}
/>

<style>
</style>
