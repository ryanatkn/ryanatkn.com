import type {Action} from 'svelte/action';

// TODO improve this so it can fire every time it enters/exits, not just the first enter
// TODO name? scrolled, onscreen, scrolled_onscreen

export const scrolled: Action<Element, (intersecting: boolean) => void> = (el, params) => {
	let p = params;
	let ob: IntersectionObserver | null = new IntersectionObserver((entries) => {
		p(entries[0].isIntersecting);
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
