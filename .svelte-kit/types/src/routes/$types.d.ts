import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/projects" | "/python" | "/python/engineering/python-abc" | "/python/engineering/python-all-dunder" | "/python/engineering/python-bool-dunder" | "/python/engineering/python-circular-imports-abc" | "/python/engineering/python-enum-magic" | "/python/engineering/python-functools-partial" | "/python/engineering/python-lazy-logging" | "/python/engineering/python-notimplemented" | "/python/engineering/python-override-decorator" | "/python/engineering/python-patch-stack" | "/python/engineering/python-post-init" | "/python/engineering/python-self-typing" | "/python/engineering/python-slots-dunder" | "/python/engineering/python-type-checking" | "/python/engineering/python-typeddict" | "/python/engineering/python-typeguard" | "/python/engineering/python-typevar-contravariance" | "/python/performative/python-profiling" | "/research" | "/research/rl-with-jax" | "/resume" | "/writing" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>>>>;