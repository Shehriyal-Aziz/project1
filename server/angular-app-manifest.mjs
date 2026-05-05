
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/project1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/project1"
  },
  {
    "renderMode": 2,
    "route": "/project1/about"
  },
  {
    "renderMode": 2,
    "route": "/project1/contact"
  },
  {
    "renderMode": 2,
    "route": "/project1/gallery"
  },
  {
    "renderMode": 2,
    "route": "/project1/list"
  },
  {
    "renderMode": 2,
    "route": "/project1/service"
  },
  {
    "renderMode": 2,
    "route": "/project1/search"
  },
  {
    "renderMode": 2,
    "route": "/project1/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LP5M7WDA.js"
    ],
    "route": "/project1/googlesearch"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25205, hash: 'd8ce3f44b442434147cd4bcbb1e210e1f542649c23194face3b524a397c06350', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17720, hash: '4cd990191410fda4f8f1b3c6584ff3c9173baf007cc19db517cfa4b9ce780405', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31682, hash: '2f053f9751af02a6538eb125a6677227607e72db1c5d1f92fe230cf678282e67', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30813, hash: 'c39bfabcd525a42a8e9332c375bcef4a0b20f1d82f6f058e4ea69d4a8cfb90b9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'list/index.html': {size: 42052, hash: '30f583e5eec9bfad200d2ea146b1c1d85343149bbc088f7697c530d27b1b2a60', text: () => import('./assets-chunks/list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30819, hash: '291d9373899c18549a444cd3cbf1c1ee75b15de80e583d61ae022b9f12fa3761', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 31521, hash: '31616afa27ef66c97edace60f60c5fdd83cb91ce7f395b1fe0794083c80f84a9', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 30930, hash: 'e75a04725bef3f59cf5abfc5475f6d87f114faed615789afe952d0834db94f22', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 34526, hash: '6590771921d6a63b010039f4b1e65de54c317a0e163c6f3c9845d81d5a292a12', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'googlesearch/index.html': {size: 103598, hash: '14f02196650e66568a41658738d8f6c8fe86d98a34a851cde1f1302ecac5758a', text: () => import('./assets-chunks/googlesearch_index_html.mjs').then(m => m.default)},
    'styles-ZBVIJ7QN.css': {size: 8043, hash: '36OwOxjXVAA', text: () => import('./assets-chunks/styles-ZBVIJ7QN_css.mjs').then(m => m.default)}
  },
};
