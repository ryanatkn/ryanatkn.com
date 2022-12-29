export type Cell = {
	name?: string | undefined;
	space: Space;
};
export type Domain = {
	name?: string | undefined;
};
export type Realm = {
	name?: string | undefined;
	domain: Domain;
};
export type Space = {
	name?: string | undefined;
	realm: Realm;
};
