<script lang="ts">
	import { sharedWidths } from '$lib/scripts/sharedVariables.svelte';
	import { get_current_content } from '$lib/scripts/state.svelte';

	const header_values = {
		PersonalIntro: '',
		ForEmployers: 'Prospective Employers and Professors',
		ProfessionalWork: 'Professional Work',
		PersonalProjects: 'Personal Projects',
		Resume: 'Resume'
	};

	let h1_value = $derived.by(() => {
		return header_values[get_current_content()];
	});
</script>

<div class="flex flex-col items-center justify-center {sharedWidths} h-50 text-center">
	<h1>{h1_value}</h1>
	{#if get_current_content() == 'PersonalIntro'}
		<h1>William Hohensee</h1>
		<p class="mb-1">B.A. Astrophysics, UC Berkeley</p>
		<p>Software Engineer, Web Developer, Astrophysicist</p>
		<p>email@emailadrress.edu</p>
	{:else if get_current_content() == 'ForEmployers'}
		{@render personalDetails()}
	{:else if get_current_content() == 'ProfessionalWork'}
		{@render personalDetails()}
	{:else if get_current_content() == 'PersonalProjects'}
		{@render personalDetails()}
	{:else if get_current_content() == 'Resume'}
		{@render personalDetails()}
	{/if}
</div>

{#snippet personalDetails()}
	<p>William Hohensee</p>
	<p>Software Developer, Systems Engineer, Astrophysicist</p>
{/snippet}

<style>
	h1 {
		font-weight: 300;
		font-size: var(--text-4xl);
		line-height: var(--text-4xl--line-height);
	}

	p {
		font-weight: 300;
		font-size: var(--text-xl);
		line-height: var(--text-xl--line-height);
	}
</style>
