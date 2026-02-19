<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	let toggled = $state(false);

	function swapToggled() {
		toggled = !toggled;
	}
</script>

<div class="flex flex-col items-center">
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
</div>
