// TODO use `Pkg` and delete this module

/**
 * Where a project stands, matching the tiers on the Fuz stack page.
 */
export type ProjectStatus = 'ready' | 'early' | 'experimental';

/**
 * fuz_css `palette_*` class tinting each status chip, as on the Fuz stack page.
 */
export const PROJECT_STATUS_COLORS: Record<ProjectStatus, string> = {
	ready: 'palette_b',
	early: 'palette_e',
	experimental: 'palette_g'
};

/**
 * Curated homepage project, ready to render.
 */
export interface ProjectInfo {
	name: string;
	repo?: string;
	homepage?: string;
	title: string;
	description?: string;
	status?: ProjectStatus;
	glyph?: string;
	subtitle?: string;
	logo?: string;
	logo_alt?: string;
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
	status?: ProjectStatus;
	repo?: string;
	/**
	 * Allows HTML.
	 */
	title: string;
	/**
	 * Allows HTML.
	 */
	subtitle?: string;
}

// TODO where do this belong?
export const LOGO_SRC = 'favicon.png';
export const LOGO_ALT = 'my avatar image, a naturally textured flat green torus';
