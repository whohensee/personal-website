<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import { resolve } from '$app/paths';
	import { sharedWidths } from '$lib/scripts/sharedVariables.svelte';
	const resumePage = resolve('/resume');
	const homePage = resolve('/');
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="mx-auto flex justify-evenly {sharedWidths} my-3">
	<a href={homePage}>Homepage</a>
	<a href={resumePage}>Resume Page</a>
</div>
{@render children()}

<style>
	@import 'tailwindcss';

	:global(body) {
		background-color: var(--color-gray-400);
		min-width: 320px;
		font-family: 'Source Sans 3';
	}

	@font-face {
		font-family: 'Source Sans 3';
		src: url('/SourceSans3-VariableFont_wght.ttf');
	}
</style>
