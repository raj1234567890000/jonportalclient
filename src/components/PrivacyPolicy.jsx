import Nav from "@/Shared/Nav";
import Footer from "./Footer";


const PrivacyPolicy = () => {
  return (
    <>
    <Nav/>
    <section className=" text-gray-800 py-16 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our Privacy Policy page! Your privacy is critically
          important to us. This policy explains how we collect, use, and protect
          your personal information.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-600">
              We collect personal information such as your name, email address,
              phone number, and other details you provide when you register on
              our site, apply for jobs, or contact us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600">
              We use the collected information to provide and improve our
              services, process job applications, communicate with you, and
              ensure a safe user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-600">
              We do not share your personal information with third parties,
              except as necessary to provide our services, comply with legal
              obligations, or protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              4. Security of Your Information
            </h2>
            <p className="text-gray-600">
              We implement industry-standard measures to protect your data
              against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet
              is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              5. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal
              information. Contact us if you wish to exercise any of these
              rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this policy from time to time. Any changes will be
              posted on this page, and the updated policy will take effect as
              soon as it is published.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-indigo-600 hover:underline"
            >
              support@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
