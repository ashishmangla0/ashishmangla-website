import Script from "next/script";

const CTA = () => {
  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
  const showDetails = process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS ? 1 : 0;
  const showCookies = process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES ? 1 : 0;
  const showEvent = process.env.NEXT_PUBLIC_SHOW_EVENT_TYPE ? 1 : 0;

  return (
    <>
      <div
        class="calendly-inline-widget"
        data-url={`https://calendly.com/${username}/30min?hide_event_type_details=${showEvent}&hide_gdpr_banner=${showCookies}&hide_landing_page_details=${showDetails}`}
        style={{ minWidth: 320, height: 600 }}
      ></div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};

export default CTA;
