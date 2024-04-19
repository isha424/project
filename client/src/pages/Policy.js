import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <ul>
            <li>
              Our website is committed to protecting your privacy and ensuring
              the security of your personal information. This policy outlines
              how we collect, use, and safeguard your data.
            </li>
            <br />
            <li>
              We collect information such as name, email, address, and payment
              details when you make a purchase. This data is used for order
              processing and customer support.
            </li>
            <br />
            <li>
              You can opt out of marketing communications at any time. We
              respect your preferences regarding the use of your data.
            </li>
            <br />
            <li>
              We use encryption and security measures to protect your payment
              information. Your financial data is safe with us.
            </li>
            <br />
            <li>
              Our customer support team is available from Monday to Friday, 9 AM
              to 6 PM (local time). We aim to respond to inquiries within 24
              hours.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
