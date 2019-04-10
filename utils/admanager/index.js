export class AdManager {
  
  /**
   * @method loadGoogleDFPSCript() - initialize the google script in head. Must be called in here because document object can be reached only after DOM mounted
   */

  static loadGooogleDFPScript() {
    const source =
      "https://www.googletagservices.com/tag/js/gpt.js";
    const script = document.createElement(
      "script"
    );
    script.type = "text/javascript";
    script.setAttribute("async", "");
    script.src = source;

    document
      .getElementsByTagName("head")[0]
      .appendChild(script);
  }

  /**
   * @method createAdConfigScript() - creates and appends script tags and injects configs into that script
   */
  
  static createAdConfigScript() {
    const adsScript = `(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client      : "ca-pub-5761283120217137",
            enable_page_level_ads : true
          });`;
    const script = document.createElement(
      "script"
    );
    script.type = "text/javascript";
    script.innerHTML = adsScript;
    document
      .getElementsByTagName("head")[0]
      .appendChild(script);
  }
}
