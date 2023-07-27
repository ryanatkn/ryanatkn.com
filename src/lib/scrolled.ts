import type {Action} from 'svelte/action';

// TODO name? scrolled, onscreen, scrolled_onscreen

export const scrolled: Action<Element, () => void> = (el, params) => {
	let p = params;
	let ob: IntersectionObserver | null = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			p();
			cleanup();
		}
	});
	const cleanup = () => {
		if (!ob) return;
		ob.disconnect();
		ob = null;
	};
	ob.observe(el);
	return {
		update: (params) => {
			p = params;
		},
		destroy: () => {
			cleanup();
		},
	};
};
