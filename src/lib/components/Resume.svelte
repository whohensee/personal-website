<script lang="ts">
	import { content_box_styling, sharedWidths } from '$lib/scripts/sharedVariables.svelte';
	import Employment from './resume/Employment.svelte';
	import Skills from './resume/Skills.svelte';
</script>

<div class="flex flex-col items-center gap-2 {sharedWidths} {content_box_styling} text-center">
	<!-- <p class={mainbox_p_styling}>This will be the resume section</p> -->
	<Employment />
	<Skills />
</div>
