<script lang="ts">
	interface Props {
		project_title: string;
		project_jobname: string;
		project_date: string;
		project_description: string;
		has_link: boolean;
		project_link: string;
		link_text: string;
		has_github: boolean;
		github_link: string;
	}

	let {
		project_title,
		project_jobname,
		project_date,
		project_description,
		has_link,
		project_link,
		link_text,
		has_github,
		github_link
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

	<div class="flex justify-center gap-2">
		{#if has_link}
			<a href={project_link} rel="external" target="_blank">
				<button type="button" class="w-fit rounded-md border p-2 hover:bg-gray-100"
					>{link_text}</button
				>
			</a>
		{/if}
		{#if has_github}
			<a href={github_link} rel="external" target="_blank">
				<button type="button" class="w-fit rounded-md border p-2 hover:bg-gray-100">Github</button>
			</a>
		{/if}
	</div>
</div>

<style>
</style>
