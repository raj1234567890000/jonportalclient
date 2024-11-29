
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div className="Footer w-full">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#006666" d="M0,32L80,58.7C160,85,320,139,480,138.7C640,139,800,85,960,80C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <footer className="bg-gray-900 text-white py-8 foot">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Company</h3>
              <p className="text-white">
                We provide the best solutions for your business needs. Join us in building the future.
              </p>
            </div>
    {/* Navigation Links */}
    <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2 hover:text-white"><a href="#"><Link to="/about" onClick={handleScrollToTop}>About Us</Link></a></li>
                <li className="mb-2 hover:text-white"><a href="#"><Link to='/services' onClick={handleScrollToTop}>Services</Link></a></li>
                <li className="mb-2 hover:text-white"><a href="#"><Link to='/contact' onClick={handleScrollToTop}>Contact</Link></a></li>
                <li className="mb-2 hover:text-white"><a href="#"><Link to="/blog" onClick={handleScrollToTop}>Blog</Link></a></li>
              </ul>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2 hover:text-white"><a href="#"><Link to="/about" onClick={handleScrollToTop}>About Us</Link></a></li>
                <li className="mb-2 hover:text-white"><a href="#"><Link to='/services' onClick={handleScrollToTop} >Services</Link></a></li>
                <li className="mb-2 hover:text-white"><a href="#"><Link to='/contact' onClick={handleScrollToTop}>Contact</Link></a></li>
                <li className="mb-2 hover:text-white"><a href="#"><Link to="/blog" onClick={handleScrollToTop}>Blog</Link></a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="">
              <h3 className="text-lg font-bold text-white mb-4 ">Follow Us</h3>
              <div className="flex space-x-4 ">
                <a href="https://www.facebook.com/login.php" className="hover:text-white social-link">
                  <i className="fab fa-facebook-f social-link"></i>
                </a>
                <a href="https://www.facebook.com/TwitterInc" className="hover:text-white social-link">
                  <i className="fab fa-twitter social-link"></i>
                </a>
                <a href="https://www.instagram.com" className="hover:text-white social-link">
                  <i className="fab fa-instagram social-link"></i>
                </a>
                <a href="https://in.indeed.com" className="hover:text-white social-link">
                  <i className="fab fa-linkedin-in social-link"></i>
                </a>
              </div>
            </div>

           </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between text-white text-center lg:text-left">
              <p>&copy; 2024 Career Nest. All rights reserved.</p>
              <div className="mt-4 lg:mt-0">
             <Link to="/privacypolicy">   <a href="#" className="hover:text-white mx-2">Privacy Policy</a></Link>
             <Link to="/service">   <a href="#" className="hover:text-white mx-2">Terms of Service</a></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
