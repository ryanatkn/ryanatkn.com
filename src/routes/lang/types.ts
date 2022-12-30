export type Cell = {
	name?: string | undefined;
	space: Space;
};
export type Domain = {
	name: string;
};
export type Realm = {
	name: string;
	domain: Domain;
};
export type Space = {
	name: string;
	realm: Realm;
};
