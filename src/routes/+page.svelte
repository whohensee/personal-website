<script lang="ts">
	let toggled = $state(false);

	function swapToggled() {
		toggled = !toggled;
	}
</script>

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
