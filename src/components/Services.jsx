import Nav from "@/Shared/Nav";
import Footer from "./Footer";


const Service = () => {
  return (
    <>
    <Nav/>
    <section className=" text-gray-800 py-16 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Please read these Terms of Service carefully before using our
          platform. By accessing or using our services, you agree to comply
          with these terms.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using our services, you agree to these terms. If you do not
              agree, you may not use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              2. User Responsibilities
            </h2>
            <p className="text-gray-600">
              Users are responsible for maintaining the confidentiality of their
              account and password. You agree not to use the service for any
              unlawful purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              3. Service Availability
            </h2>
            <p className="text-gray-600">
              We strive to maintain uninterrupted service, but we do not
              guarantee availability. The service may be interrupted for
              maintenance, updates, or unforeseen issues.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content, trademarks, and other materials on this platform are
              owned by us or licensed to us. Unauthorized use of these materials
              is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              We are not liable for any direct, indirect, incidental, or
              consequential damages resulting from the use or inability to use
              our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              6. Modifications to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on our platform.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            If you have any questions or concerns about these Terms of Service,
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

export default Service;
