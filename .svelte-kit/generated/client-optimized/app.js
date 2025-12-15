export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/projects": [3],
		"/python": [4],
		"/python/engineering/python-abc": [5],
		"/python/engineering/python-all-dunder": [6],
		"/python/engineering/python-bool-dunder": [7],
		"/python/engineering/python-circular-imports-abc": [8],
		"/python/engineering/python-enum-magic": [9],
		"/python/engineering/python-functools-partial": [10],
		"/python/engineering/python-lazy-logging": [11],
		"/python/engineering/python-notimplemented": [12],
		"/python/engineering/python-override-decorator": [13],
		"/python/engineering/python-patch-stack": [14],
		"/python/engineering/python-post-init": [15],
		"/python/engineering/python-self-typing": [16],
		"/python/engineering/python-slots-dunder": [17],
		"/python/engineering/python-type-checking": [18],
		"/python/engineering/python-typeddict": [19],
		"/python/engineering/python-typeguard": [20],
		"/python/engineering/python-typevar-contravariance": [21],
		"/python/performative/python-profiling": [22],
		"/research": [23],
		"/resume": [24],
		"/writing": [25]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';