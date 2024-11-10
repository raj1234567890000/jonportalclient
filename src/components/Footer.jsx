const Footer = () => {
  return (
    <div className="Footer w-full">
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Company</h3>
              <p className="text-gray-400">
                We provide the best solutions for your business needs. Join us in building the future.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2 hover:text-white"><a href="#">About Us</a></li>
                <li className="mb-2 hover:text-white"><a href="#">Services</a></li>
                <li className="mb-2 hover:text-white"><a href="#">Contact</a></li>
                <li className="mb-2 hover:text-white"><a href="#">Blog</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="">
              <h3 className="text-lg font-bold text-white mb-4 ">Follow Us</h3>
              <div className="flex space-x-4 ">
                <a href="#" className="hover:text-white social-link">
                  <i className="fab fa-facebook-f social-link"></i>
                </a>
                <a href="#" className="hover:text-white social-link">
                  <i className="fab fa-twitter social-link"></i>
                </a>
                <a href="#" className="hover:text-white social-link">
                  <i className="fab fa-instagram social-link"></i>
                </a>
                <a href="#" className="hover:text-white social-link">
                  <i className="fab fa-linkedin-in social-link"></i>
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get the latest updates.</p>
              <form>
                <input
                  type="email"
                  className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between text-gray-400 text-center lg:text-left">
              <p>&copy; 2024 Company Name. All rights reserved.</p>
              <div className="mt-4 lg:mt-0">
                <a href="#" className="hover:text-white mx-2">Privacy Policy</a>
                <a href="#" className="hover:text-white mx-2">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
