// TODO use `Pkg` and delete this module

/**
 * Curated homepage project, ready to render.
 */
export interface ProjectInfo {
	name: string;
	repo?: string;
	homepage?: string;
	title: string;
	description?: string;
	tagline?: string;
	glyph?: string;
	subtitle?: string;
	logo?: string;
	logo_alt?: string;
	logo_style?: string;
	logo_classes?: string;
}

/**
 * Hand-authored metadata for a homepage project, merged with `repos.json` data
 * to produce a `ProjectInfo`.
 */
export interface ProjectMetadata {
	name: string;
	homepage?: string;
	/**
	 * Allows HTML.
	 */
	description?: string;
	tagline?: string; // TODO @many this is a hack because cosmicplayground hasn't been deployed
	glyph?: string; // TODO @many hack for zzz, fix after adding to gitops
	repo?: string;
	/**
	 * Allows HTML.
	 */
	title: string;
	/**
	 * Allows HTML.
	 */
	subtitle?: string;
	logo?: string; // TODO @many this is a hack because cosmicplayground hasn't been deployed
	logo_alt?: string; // TODO @many hack for zzz, fix after adding to gitops
	logo_style?: string;
}

// TODO where do this belong?
export const LOGO_SRC = 'favicon.png';
export const LOGO_ALT = 'my avatar image, a naturally textured flat green torus';
