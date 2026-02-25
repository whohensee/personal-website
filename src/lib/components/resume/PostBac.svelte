<script lang="ts">
	let toggled = $state(false);

	function swapToggle() {
		toggled = !toggled;
	}
</script>

<!-- Title -->
<button type="button" onclick={swapToggle}>
	<p>
		<strong>Post Baccalaureate Fellow, Lawrence Berkeley National Laboratory</strong>
	</p>
	<p>Sept 2024 - Oct 2025</p>
	{#if toggled}
		<p>
			Extensive work as part of a 3-man team building SeeChange, a time-domain data reduction
			pipeline (e.g., for handling images -> lightcurves) for imaging surveys, written for the La
			Silla Schmidt Southern Survey (LS4) with support for other surveys (CTIO4m/DECam).
			Cooperatively worked on the large (63,000+ lines of code) codebase primarily written in Python
			and Javascript interacting with a PostgreSQL database. Worked primarily with Rob Knop (LBNL)
			under Peter Nugent (LBNL).
		</p>
	{/if}
</button>
