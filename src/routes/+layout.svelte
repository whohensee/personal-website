<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

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
