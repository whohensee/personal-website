<script lang="ts">
	import { resolve } from '$app/paths';

	const resumePage = resolve('/resume');
</script>

<div class="flex flex-col items-center gap-3">
	<p>Welcome and Intro Page</p>

	<p><a href={resumePage}>Resume Page</a></p>
</div>
