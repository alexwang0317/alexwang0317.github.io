export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","assets/images/Flame_graph.png","assets/images/hudson-landscape.jpg","assets/images/profile.jpg","assets/images/profile2.jpg","assets/images/profile3.jpg","assets/images/profile4.jpg","assets/images/profile5.jpg","assets/pdf/Browser_Fingerprinting.pdf","assets/pdf/CS_228_Notes.pdf","assets/pdf/CS_252r_Notes.pdf","assets/pdf/CS_252r_Notes_PL_Studio.pdf","assets/pdf/Compression_Based_Generalization_Bounds.pdf","assets/pdf/DeepCoder.pdf","assets/pdf/Generative_Music_Modeling.pdf","assets/pdf/Hydroelastics.pdf","assets/pdf/Jax_Parallelism.pdf","assets/pdf/Learning_Space_Cryptography.pdf","assets/pdf/Lorenz_System_Bifurcations.pdf","assets/pdf/Math_132_Notes.pdf","assets/pdf/Math_55a_Notes.pdf","assets/pdf/Math_55b_Notes.pdf","assets/pdf/Senior_Thesis.pdf","assets/pdf/Single_Bidder_Multi_Item_Auctions.pdf","assets/pdf/Stat_210_Notes.pdf","assets/pdf/Stat_211_Notes.pdf","favicon.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9630768a.js","imports":["_app/immutable/entry/start.9630768a.js","_app/immutable/chunks/index.dd6ea1d3.js","_app/immutable/chunks/singletons.299dd69a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9057c32a.js","imports":["_app/immutable/entry/app.9057c32a.js","_app/immutable/chunks/index.dd6ea1d3.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/python",
				pattern: /^\/python\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-abc",
				pattern: /^\/python\/engineering\/python-abc\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-all-dunder",
				pattern: /^\/python\/engineering\/python-all-dunder\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-bool-dunder",
				pattern: /^\/python\/engineering\/python-bool-dunder\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-circular-imports-abc",
				pattern: /^\/python\/engineering\/python-circular-imports-abc\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-enum-magic",
				pattern: /^\/python\/engineering\/python-enum-magic\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-functools-partial",
				pattern: /^\/python\/engineering\/python-functools-partial\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-lazy-logging",
				pattern: /^\/python\/engineering\/python-lazy-logging\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-notimplemented",
				pattern: /^\/python\/engineering\/python-notimplemented\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-override-decorator",
				pattern: /^\/python\/engineering\/python-override-decorator\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-patch-stack",
				pattern: /^\/python\/engineering\/python-patch-stack\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-post-init",
				pattern: /^\/python\/engineering\/python-post-init\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-self-typing",
				pattern: /^\/python\/engineering\/python-self-typing\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-slots-dunder",
				pattern: /^\/python\/engineering\/python-slots-dunder\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-type-checking",
				pattern: /^\/python\/engineering\/python-type-checking\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-typeddict",
				pattern: /^\/python\/engineering\/python-typeddict\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-typeguard",
				pattern: /^\/python\/engineering\/python-typeguard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/python/engineering/python-typevar-contravariance",
				pattern: /^\/python\/engineering\/python-typevar-contravariance\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			},
			{
				id: "/python/performative/python-profiling",
				pattern: /^\/python\/performative\/python-profiling\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 22 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 23 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 24 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 25 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
