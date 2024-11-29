import Nav from "@/Shared/Nav";
import Footer from "./Footer";




const AboutUs = () => {
  return (
    <>
    <Nav/>
    <section className="py-12 mt-56 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated to delivering excellence and creating impactful solutions for our clients.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://thumbs.dreamstime.com/b/us-businessman-working-modern-technology-73677146.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full md:max-w-md"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-4">
              We are a team of passionate professionals dedicated to bringing ideas to life.
              With years of experience across various industries, we strive to create innovative solutions that meet and exceed expectations.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals and businesses through cutting-edge technologies and
              tailored strategies that drive growth and success.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value Cards */}
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-gray-300">Integrity</h4>
              <p className="text-gray-300 mt-2">We uphold the highest ethical standards in everything we do.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-gray-300">Innovation</h4>
              <p className="text-gray-300 mt-2">We embrace creativity to deliver transformative solutions.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-gray-300">Excellence</h4>
              <p className="text-gray-300 mt-2">We strive for exceptional quality in every project we undertake.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-gray-300">Collaboration</h4>
              <p className="text-gray-300 mt-2">We work together to achieve shared goals and long-lasting success.</p>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  <Footer/>
    </>
  );
};

export default AboutUs;
