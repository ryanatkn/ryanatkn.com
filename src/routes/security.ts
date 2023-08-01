import {dev} from '$app/environment';

// TODO maybe use `https://kit.svelte.dev/docs/configuration#csp`, but then can't be dynamic?
export const prod_content_security_policy =
	"default-src 'unsafe-inline' 'self'; connect-src 'self' https://hachyderm.io/; img-src 'self' https://hachyderm.io/ https://*.hachyderm.io/;";

export const content_security_poilicy = dev ? undefined : prod_content_security_policy;
