import paths from "/paths.js";

const navContent = paths.map(item => `<a href="${item.path}">${item.page}</a>` ).join('');
const nav = document.createElement('nav');
nav.innerHTML = navContent;

export { nav };