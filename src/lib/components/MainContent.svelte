<script lang="ts">
	import { sharedWidths } from '$lib/scripts/sharedVariables.svelte';
	import type { content_types } from '$lib/types';
	import ForEmployers from './ForEmployers.svelte';
	import PersonalIntro from './PersonalIntro.svelte';
	import PersonalProjects from './PersonalProjects.svelte';
	import ProfessionalWork from './ProfessionalWork.svelte';

	let current_content: content_types = $state('ForEmployers');
</script>

<div class="mainbox flex flex-col {sharedWidths}">
	<!-- consider making this navbar semantically correct -->
	<div class="navbar flex flex-wrap justify-around gap-1">
		{@render navbarItem('About Me', 'PersonalIntro')}
		{@render navbarItem('For Employers', 'ForEmployers')}
		{@render navbarItem('My Work', 'ProfessionalWork')}
		{@render navbarItem('My Projects', 'PersonalProjects')}
	</div>
	{#if current_content == 'ForEmployers'}
		<ForEmployers />
	{:else if current_content == 'PersonalIntro'}
		<PersonalIntro />
	{:else if current_content == 'ProfessionalWork'}
		<ProfessionalWork />
	{:else if current_content == 'PersonalProjects'}
		<PersonalProjects />
	{/if}
</div>

{#snippet navbarItem(text: string, current_content_value: content_types)}
	<button
		onclick={() => {
			current_content = current_content_value;
		}}
	>
		{text}
	</button>
{/snippet}
