/* global gtag, TAG_ID */

export default ({ router }) => {
  if (process.env.NODE_ENV === 'production' && TAG_ID && typeof window !== 'undefined') {
    (function (i, s, o, g, r, a, m) {
      i['dataLayer'] = i['dataLayer'] || []
      i[r] = i[r] || function () {
        dataLayer.push(arguments)
      }
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g + '?id=' + TAG_ID
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.googletagmanager.com/gtag/js', 'gtag')

    gtag('js', new Date());

    const consent = {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
    };

    try {
      const localStorageConsent = localStorage.getItem('consent');
      if (localStorageConsent) {
        const { expiry, ...localConsent } = JSON.parse(localStorageConsent);
        const now = new Date();
        if (now.getTime() > expiry) {
          localStorage.removeItem('consent');
        }

        Object.assign(consent, localConsent);
      }
    } catch (e) {}

    gtag('consent', 'default', {
      'ad_storage': consent.ad_storage,
      'ad_user_data': consent.ad_user_data,
      'ad_personalization': consent.ad_personalization,
      'analytics_storage': consent.analytics_storage
    })

    gtag('config', TAG_ID);

    router.afterEach(function (to) {
      const fullPath = router.app.$withBase(to.fullPath)

      gtag('config', TAG_ID, { 'page_path': fullPath, 'location_path': window.location.origin + fullPath })
      gtag('event', 'page_view', { 'send_to': TAG_ID })
    })
  }
}

