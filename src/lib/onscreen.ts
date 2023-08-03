import {dequal} from 'dequal';
import type {Action} from 'svelte/action';

// TODO upstream, where?

export interface OnscreenCallback {
	(visible: boolean): void;
}

export type OnscreenParams =
	| OnscreenCallback
	| {cb: OnscreenCallback; options: IntersectionObserverInit};

export const onscreen: Action<Element, OnscreenParams> = (el, initial) => {
	let cb: OnscreenCallback;
	let options: IntersectionObserverInit | undefined;
	let observer: IntersectionObserver | null;

	const update = (params: OnscreenParams): void => {
		if (typeof params === 'function') {
			cb = params;
			options = undefined;
		} else {
			cb = params.cb;
			options = params.options;
		}
	};
	const cleanup = (): void => {
		if (!observer) return;
		observer.disconnect();
		observer = null;
	};
	const observe = (): void => {
		if (observer) return;
		observer = new IntersectionObserver((entries) => {
			cb(entries[0].isIntersecting);
		}, options);
		observer.observe(el);
	};

	update(initial);
	observe();

	return {
		update: (params) => {
			const prevOptions = options;
			update(params);
			if (!dequal(prevOptions, options)) {
				cleanup();
				observe();
			}
		},
		destroy: () => {
			cleanup();
		},
	};
};
