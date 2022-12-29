import {z} from 'zod';
import {withGetType} from 'zod-to-ts';

export const name = z.string();

export const DomainSchema = z.object({
	name: name.optional(),
});

// TODO BLOCK make these reusable, modify during gen? need to get identifier, maybe through data?
// TODO BLOCK these `required` calls are used because `withGetType` mutates the schema, how to clone or do better?

export const RealmSchema = z.object({
	name: name.optional(),
	domain: withGetType(DomainSchema.required(), (ts) => ts.factory.createIdentifier('Domain')),
});

export const SpaceSchema = z.object({
	name: name.optional(),
	realm: withGetType(RealmSchema.required(), (ts) => ts.factory.createIdentifier('Realm')),
});

export const CellSchema = z.object({
	name: name.optional(),
	space: withGetType(SpaceSchema.required(), (ts) => ts.factory.createIdentifier('Space')),
	// TODO value/data
});
