// favicon
// import '../assets/favicon.png';

const headData = {
  title: 'Spending Tracker',
  desc: '',
  socialImage: '',
  favicon: '',
};

const headMeta = [
  { name: 'copyright', content: 'akccakcctw', id: 'copyright' },
  { name: 'description', content: headData.desc, id: 'desc' },
  { name: 'theme-color', content: '#000', id: 'theme-color' },
  // Google+ / Schema.org
  { itemprop: 'name', content: headData.title },
  { itemprop: 'description', content: headData.desc },
  { itemprop: 'image', content: headData.socialImage },
  // Facebook / Open Graph
  { property: 'og:title', content: headData.title },
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: headData.socialImage },
  { property: 'og:description', content: headData.desc },
  { property: 'og:site_name', content: 'Spending Tracker' },
  { property: 'og:locale', content: 'zh_TW', id: 'locale' },
  // Twitter
  { name: 'twitter:title', content: headData.title },
  { name: 'twitter:description', content: headData.desc },
];

const headLink = [
  {
    rel: 'icon', href: headData.favicon, sizes: '192x192', type: 'image/png',
  },
  // sweetalert2
  {
    rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.9.1/sweetalert2.min.css', integrity: 'sha256-dFCwuhCfoeoBeMuViN7hhbZEZW7takATo0uQ8SzZSI8=', crossorigin: 'anonymous',
  },
];

export {
  headMeta,
  headLink,
};
