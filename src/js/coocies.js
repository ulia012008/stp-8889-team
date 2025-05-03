export function shouldShowCookieBanner() {
  const consent = localStorage.getItem('cookieConsent');
  return !consent;
}

export function setCookieConsent(value) {
  localStorage.setItem('cookieConsent', value);
}

export function handleCookieBanner() {
  const banner = document.querySelector('[data-banner]');
  const acceptBtn = document.querySelector('[data-accept]');
  const declineBtn = document.querySelector('[data-decline]');

  if (shouldShowCookieBanner()) {
    banner.setAttribute('data-show', 'true');
  }

  const hideBanner = () => {
    banner.setAttribute('data-show', 'false');
  };

  acceptBtn.addEventListener('click', () => {
    setCookieConsent('accepted');
    hideBanner();
  });

  declineBtn.addEventListener('click', () => {
    setCookieConsent('declined');
    hideBanner();
  });
}
