import {dev} from '$app/environment';

export const content_security_poilicy = dev
	? undefined
	: "default-src 'unsafe-inline' 'self'; connect-src 'self' https://hachyderm.io/; img-src 'self' https://hachyderm.io/ https://*.hachyderm.io/;";
