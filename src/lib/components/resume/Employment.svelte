<script lang="ts">
	import PostBac from './employment/PostBac.svelte';
	import CSE from './employment/CSE.svelte';
	import StudentResearcher from './employment/StudentResearcher.svelte';
	import { resume_font_styling } from '$lib/scripts/sharedVariables.svelte';
</script>

<h2 class="text-xl {resume_font_styling}"><strong><u>Employment</u></strong></h2>
<PostBac />
<CSE />
<StudentResearcher />
