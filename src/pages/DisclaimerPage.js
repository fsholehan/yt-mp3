import { Link } from "react-router-dom";

function DisclaimerPage() {
  return (
    <div className="mx-10 mt-7">
      <div className="flex justify-between">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 rounded-lg text-white ring-2 ring-blue-200 mb-5"
        >
          Back to Home
        </Link>
      </div>
      <h1 className="font-medium">Disclaimer for lagump3dl.com</h1>

      <p>
        If you require any more information or have any questions about our
        site's disclaimer, please feel free to contact us by email at{" "}
        <span className="font-semibold">cp.phonetrik@gmail.com</span>
      </p>

      <h2 className="font-semibold">Disclaimers for lagump3dl.com</h2>

      <p>
        All the information on this website - lagump3dl.com - is published in
        good faith and for general information purpose only. lagump3dl.com does
        not make any warranties about the completeness, reliability and accuracy
        of this information. Any action you take upon the information you find
        on this website (lagump3dl.com), is strictly at your own risk.
        lagump3dl.com will not be liable for any losses and/or damages in
        connection with the use of our website. Our Disclaimer was generated
        with the help of the{" "}
        <a href="https://www.privacypolicyonline.com/disclaimer-generator/">
          Disclaimer Generator
        </a>
        .
      </p>

      <p>
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone 'bad'.
      </p>

      <p>
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their "Terms of Service" before engaging in any business or uploading
        any information.
      </p>

      <h2 className="font-semibold">Consent</h2>

      <p>
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>

      <h2 className="font-semibold">Update</h2>

      <p>
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </div>
  );
}

export default DisclaimerPage;
