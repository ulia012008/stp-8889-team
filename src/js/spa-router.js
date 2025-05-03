export const routes = {
  '/privacy-policy.html': '/src/privacy-policy.html',
  '/terms-conditions.html': '/src/terms-conditions.html',
  '/cookie-policy.html': '/src/cookie-policy.html',
};

export async function loadPage(path, content) {
  const page = routes[path];
  if (page) {
    try {
      const res = await fetch(page);
      const html = await res.text();
      content.innerHTML = html;
      history.pushState(null, '', path);
    } catch (error) {
      console.error('Error loading page:', error);
      content.innerHTML =
        '<p>Failed to load the page. Please try again later.</p>';
    }
  }
}
