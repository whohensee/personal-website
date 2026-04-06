<script lang="ts">
	import { resume_font_styling } from '$lib/scripts/sharedVariables.svelte';

	let toggled = $state(false);

	function swapToggle() {
		toggled = !toggled;
	}
</script>

<!-- Title -->
<button type="button" onclick={swapToggle}>
	<p class="{resume_font_styling} text-lg">
		{#if !toggled}
			▷
		{:else}
			▽
		{/if}
		<strong>Student Researcher, Lawrence Berkeley National Laboratory</strong>
	</p>
	<p class="{resume_font_styling} text-base">June 2022 - Aug 2023</p>
	{#if toggled}
		<p class="{resume_font_styling} text-base">
			Full-time astrophysics research for MOSTHOSTS, a part of the DESI collaboration. Assembled and
			analyzed SNe data in the context of newly acquired DESI measurements under the supervision of
			Anna Y. Q. Ho (Cornell), Maayane Sougnmayac (LBNL), and Peter Nugent (LBNL).
		</p>
	{/if}
</button>
