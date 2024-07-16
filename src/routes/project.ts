// TODO use `Package_Meta` and delete this module
export interface Project_Info {
	name: string;
	repo?: string;
	homepage?: string;
	title: string;
	description?: string;
	motto?: string;
	glyph?: string;
	subtitle?: string;
	logo?: string;
	logo_alt?: string;
	logo_style?: string;
	logo_classes?: string;
}

// TODO where do this belong?
export const LOGO_SRC = 'favicon.png';
export const LOGO_ALT = 'my avatar image, a naturally textured flat green torus';
