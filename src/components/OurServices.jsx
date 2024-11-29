import Nav from "@/Shared/Nav";
import Footer from "./Footer";


const OurServices = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Build responsive, dynamic, and user-friendly websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Create sleek, fast, and functional mobile apps for Android and iOS platforms.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description:
        "Craft intuitive and visually appealing designs to enhance user experiences.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with SEO, social media, and targeted marketing strategies.",
      icon: "📈",
    },
  ];

  return (
    <>
    <Nav/>
    <section className=" text-gray-800 py-16 px-6 lg:px-24 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our range of professional services designed to help your
          business grow and succeed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default OurServices;
