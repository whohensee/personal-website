<script>
	import {
		button_styling,
		content_box_styling,
		sharedWidths,
		mainbox_p_styling
	} from '$lib/scripts/sharedVariables.svelte';

	import { resolve } from '$app/paths';
	const resumeLink = resolve('/resume');
</script>

<div class="flex flex-col items-center {sharedWidths} gap-2 {content_box_styling} text-center">
	<div class="flex items-center gap-2">
		<a href={resumeLink} target="_blank" class="{button_styling} bg-blue-400 text-lg"
			>Check out my Resume</a
		>
		<a
			href="https://github.com/whohensee"
			target="_blank"
			type="button"
			class="{button_styling} bg-lime-300 text-lg">Check out my GitHub</a
		>
	</div>
	<p class={mainbox_p_styling}>
		I love a good challenge or interesting problem to think about, and I'd be thrilled to hear about
		what you are working on and to think about how best I can contribute. Learning is a passion of
		mine, and I always do my best to stay informed on modern technologies and work hard to
		understand them at a core level so that I can apply them appropriately and effectively.
	</p>

	<p class={mainbox_p_styling}>
		I have learned and built applications with many different programming languages, SQL databases,
		and web frameworks. In the process, I have developed an intuition and process for finding the
		right tool for the job, even if it requires picking up something new. If it sounds like I have
		experience with your technology, thats awesome, but even if not I am enthusiastic and efficient
		when it comes to developing new skills.
	</p>
</div>
