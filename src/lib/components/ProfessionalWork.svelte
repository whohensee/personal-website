<script lang="ts">
	import { content_box_styling, sharedWidths } from '$lib/scripts/sharedVariables.svelte';
	import WorkCSE from './work_showcase/my_work/WorkCSE.svelte';
	import WorkStudentResearch from './work_showcase/my_work/WorkStudentResearch.svelte';
</script>

<div class="flex flex-col items-center gap-2 {sharedWidths} {content_box_styling} text-center">
	<WorkCSE />
	<WorkStudentResearch />
</div>
