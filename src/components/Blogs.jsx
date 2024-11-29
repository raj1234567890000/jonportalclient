import Nav from "@/Shared/Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Ace Your Next Job Interview",
      description:
        "Discover the top tips to prepare for job interviews and leave a lasting impression.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuw7jEFmghlxH_Pj1RSWRzeMdvP2FG1x4ew&s",
      date: "November 28, 2024",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Top Skills Employers Look for in 2024",
      description:
        "Stay ahead of the curve with these in-demand skills for the evolving job market.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYn_PRahOj0cetpM9fBvajKbtNxwrHemoUQ&s",
      date: "November 25, 2024",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "The Importance of a Professional Resume",
      description:
        "Learn how to craft a resume that highlights your skills and gets noticed by recruiters.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVckxUQ6WxjP7KgbYp0MA26BCH0PKXU8WAow&s",
      date: "November 20, 2024",
      author: "Emily Carter",
    },
  ];

  return (
    <>
      <Nav />
      <section className="text-gray-800 py-16 px-6 lg:px-24 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest Blogs
          </motion.h2>
          <motion.p
            className="text-lg mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Stay updated with the latest tips, trends, and insights in the job market.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Blog Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Blog Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-2xl font-semibold text-gray-900 mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {post.title}
                  </motion.h3>
                  <p className="mb-4">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
