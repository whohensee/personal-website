<script lang="ts">
	let toggled = $state(false);

	function swapToggle() {
		toggled = !toggled;
	}
</script>

<!-- Title -->
<button type="button" onclick={swapToggle}>
	<p>
		<strong>Computer Systems Engineer, Lawrence Berkeley National Laboratory</strong>
	</p>
	<p>Dec 2023 - Aug 2024</p>
	{#if toggled}
		<p>
			Development work on dockerized software designed for deployment via podman and docker on the
			LBNL NERSC supercomputer. Experience with Spin, the NERSC cloud Kubernetes cluster-management
			framework. Extensive Linux experience, including bash scripting, maintaining package
			versioning and user permissions. Development of user-friendly web application (Flask) and
			maintaining, migrating, and developing schema for postgreSQL databases.
		</p>
	{/if}
</button>
