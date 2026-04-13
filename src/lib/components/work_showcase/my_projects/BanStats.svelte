<script lang="ts">
	import ProjectCard from '../ProjectCard.svelte';

	const project_title = 'BAN Stats';
	const project_jobname =
		'A data-visualization webpage which interacts with the Start.GG Developer API';
	const project_description =
		'This site gathers data by querying the RESTful API of Start.GG, the largest online tournament host, and generates graphics allowing users of the BAN Community to visualize their performance in the tournament over time. I built it many years ago with simple HTML/CSS and JS, but it holds a special place in my heart.';
	const project_date = '';
	const has_link = true;

	const project_link = 'https://extav.github.io/ban-graphs/';
	const link_text = 'View Website';

	const has_github = true;
	const github_link = 'https://github.com/extav/ban-graphs';
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
