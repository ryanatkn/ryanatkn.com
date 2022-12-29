import type {Gen} from '@feltcoop/gro';
import {createTypeAlias, zodToTs, printNode} from 'zod-to-ts';
import {stripEnd} from '@feltcoop/util/string.js';

import * as lang from './lang';

export const gen: Gen = () => {
	let langTypesContent = '';
	interface LangData {
		identifiers: string[];
	}
	const langJson: LangData = {identifiers: []};

	for (const key in lang) {
		if (key.endsWith('Schema')) {
			const value = (lang as any)[key];
			const identifier = stripEnd(key, 'Schema');
			langJson.identifiers.push(identifier);
			const {node} = zodToTs(value, identifier);
			const typeAlias = createTypeAlias(node, identifier);
			langTypesContent += 'export ' + printNode(typeAlias) + ';\n';
		}
	}

	return [
		{filename: './types.ts', content: langTypesContent},
		{filename: './lang.json', content: JSON.stringify(langJson)},
	];
};
