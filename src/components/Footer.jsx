import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // Import React hooks

const Footer = () => {
  const [ setIsVisible] = useState(false);
  const footerRef = useRef(null);

  // Handle smooth scroll to top on link click
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Intersection Observer to detect when the footer is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="Footers w-full bg-gradient-to-b from-purple-600 via-pink-500 to-orange-400">
      <footer
        ref={footerRef}
        className=" text-white py-8 foot"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Company</h3>
              <p className="text-white text-sm md:text-base">
                We provide the best solutions for your business needs. Join us in building the future.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2 hover:text-white">
                  <Link to="/about" onClick={handleScrollToTop}>About Us</Link>
                </li>
                <li className="mb-2 hover:text-white">
                  <Link to='/services' onClick={handleScrollToTop}>Services</Link>
                </li>
                <li className="mb-2 hover:text-white">
                  <Link to='/contact' onClick={handleScrollToTop}>Contact</Link>
                </li>
                <li className="mb-2 hover:text-white">
                  <Link to="/blog" onClick={handleScrollToTop}>Blog</Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/login.php"
                  className="hover:text-white text-xl transform transition-transform hover:scale-125"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  className="hover:text-white text-xl transform transition-transform hover:scale-125"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  className="hover:text-white text-xl transform transition-transform hover:scale-125"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="hover:text-white text-xl transform transition-transform hover:scale-125"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between text-white text-center lg:text-left">
              <p className="text-sm">© 2024 Career Nest. All rights reserved.</p>
              <div className="mt-4 lg:mt-0">
                <Link to="/privacypolicy">
                  <span
                    className="hover:text-white mx-2 text-sm"
                    onClick={handleScrollToTop}
                  >
                    Privacy Policy
                  </span>
                </Link>
                <Link to="/service">
                  <span
                    className="hover:text-white mx-2 text-sm"
                    onClick={handleScrollToTop}
                  >
                    Terms of Service
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
