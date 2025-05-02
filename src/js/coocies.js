export function shouldShowCookieBanner() {
  const consent = localStorage.getItem('cookieConsent');
  return !consent;
}

export function setCookieConsent(value) {
  localStorage.setItem('cookieConsent', value);
}
