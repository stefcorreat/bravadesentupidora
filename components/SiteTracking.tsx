import Script from "next/script";

const tagManagerId = "GTM-TTJD5Z87";
const analyticsId = "G-3S030996D7";
const tagManagerOrigin = "https://www.googletagmanager.com";

export function TagManagerFallback() {
  return (
    <noscript>
      <iframe
        src={`${tagManagerOrigin}/ns.html?id=${tagManagerId}`}
        title="Google Tag Manager"
        width={0}
        height={0}
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

export function SiteTracking() {
  return <>
    <Script id="brava-google-tracking" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
        window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', '${analyticsId}');
      `}
    </Script>
    <Script id="brava-gtm" src={`${tagManagerOrigin}/gtm.js?id=${tagManagerId}`} strategy="afterInteractive" async/>
    <Script id="brava-ga4" src={`${tagManagerOrigin}/gtag/js?id=${analyticsId}`} strategy="afterInteractive" async/>
    <Script
      id="brava-protect-collector"
      src="https://protect.midiaemarketingdigital.com.br/api/collector?token=e7a8a712-528c-4887-b3dc-0f452ce95f22"
      strategy="afterInteractive"
      async
    />
  </>;
}
