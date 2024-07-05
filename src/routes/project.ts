// TODO probably extend package.json with these properties and delete this module
export interface Project_Info {
	name: string;
	repo?: string;
	title: string;
	description?: string;
	motto?: string;
	glyph?: string;
	links?: string;
	logo?: string;
	logo_alt?: string;
	logo_style?: string;
	logo_classes?: string;
}

// TODO where do this belong?
export const LOGO_SRC = 'favicon.png';
export const LOGO_ALT = 'my avatar image, a naturally textured flat green torus';
