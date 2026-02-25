<script lang="ts">
	import CSE from '$lib/components/resume/CSE.svelte';
	import Header from '$lib/components/Header.svelte';
	import PostBac from '$lib/components/resume/PostBac.svelte';
	import StudentResearcher from '$lib/components/resume/StudentResearcher.svelte';
	import { content_box_styling, sharedWidths } from '$lib/scripts/sharedVariables.svelte';

	let toggled = $state(false);

	function swapToggled() {
		toggled = !toggled;
	}
</script>

<div class="flex flex-col items-center gap-3 {sharedWidths} mx-auto {content_box_styling} p-2">
	<Header />

	<button type="button" onclick={swapToggled}>
		<p>
			<strong>Bachelor of Arts, Astrophysics</strong> from UC Berkeley
			{#if !toggled}
				◁
			{:else}
				▽
			{/if}
		</p>
		{#if toggled}
			<p>Toggled is on!</p>
		{/if}
	</button>

	<PostBac />
	<CSE />
	<StudentResearcher />
</div>
