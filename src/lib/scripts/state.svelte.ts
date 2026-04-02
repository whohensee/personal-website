import type { content_types } from '$lib/types';

let current_content: content_types = $state('PersonalIntro');

export function assign_content(content_type: content_types) {
	current_content = content_type;
}

export function get_current_content() {
	return current_content;
}
