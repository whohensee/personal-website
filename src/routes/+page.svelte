<script lang="ts">
	import CSE from '$lib/components/CSE.svelte';
	import Header from '$lib/components/Header.svelte';
	import PostBac from '$lib/components/PostBac.svelte';
	import StudentResearcher from '$lib/components/StudentResearcher.svelte';

	let toggled = $state(false);

	function swapToggled() {
		toggled = !toggled;
	}
</script>

<div class="flex flex-col items-center gap-3">
	<Header />

	<button type="button" onclick={swapToggled}>
		<p>
			<strong>Bachelor of Arts, Astronomy</strong> from UC Berkeley
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
