<script lang="ts">
	import { resolve } from '$app/paths';
	import type { validPaths } from '$lib/types';

	interface Props {
		project_title: string;
		project_jobname: string;
		project_date: string;
		project_description: string;
		has_link: boolean;
		project_link: validPaths;
	}

	let {
		project_title,
		project_jobname,
		project_date,
		project_description,
		has_link,
		project_link
	}: Props = $props();
</script>

<div class="flex w-full flex-col items-center gap-2 rounded-lg border p-1">
	<p class="text-lg font-bold">{project_title}</p>
	<div>
		<p><i>{project_jobname}</i></p>
		<p><i>{project_date}</i></p>
	</div>
	<p>
		{project_description}
	</p>

	{#if has_link}
		<a href={resolve(project_link)}>
			<button type="button" class="w-fit rounded-md border p-2 hover:bg-gray-100"
				>View Details</button
			>
		</a>
	{/if}
</div>

<style>
</style>
