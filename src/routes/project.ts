// TODO probably extend package.json with these properties and delete this module
export interface Project_Info {
	name: string;
	title: string;
	description?: string;
	motto?: string;
	emoji?: string;
	links?: string;
	icon?: string;
	icon_alt?: string;
	icon_style?: string;
	icon_classes?: string;
}

// TODO where do this belong?
export const LOGO_SRC = 'favicon.png';
export const LOGO_ALT = 'my avatar image, a naturally textured flat green torus';
