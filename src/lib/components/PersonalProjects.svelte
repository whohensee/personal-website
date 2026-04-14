<script lang="ts">
	import { content_box_styling, sharedWidths } from '$lib/scripts/sharedVariables.svelte';
	import BanStats from './work_showcase/my_projects/BanStats.svelte';
	import JustTheRecipe from './work_showcase/my_projects/JustTheRecipe.svelte';
</script>

<div class="flex flex-col items-center gap-2 {sharedWidths} {content_box_styling} text-center">
	<JustTheRecipe />
	<BanStats />
</div>
