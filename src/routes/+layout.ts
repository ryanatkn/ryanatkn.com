export const prerender = true;
// TODO fixes CSP error for SSR that otherwise requires `'script-src-attr': ['unsafe-inline']` - https://github.com/sveltejs/kit/issues/11747
// disable SSR in production when fixed
export const ssr = false;
// import {DEV} from 'esm-env';
// export const ssr = DEV;
