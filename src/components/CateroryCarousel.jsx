import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/Redux/jobSlices";
import { motion } from "framer-motion";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Graphic Designer",
  "Data Scientist",
];

const CateroryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browser");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  // Framer Motion Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="category-carousel bg-gradient-to-br  py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Browse Categories
        </h2>
        <Carousel className="flex flex-wrap justify-center">
          <CarouselContent className="flex flex-wrap gap-4 justify-center">
            {category.map((cat, index) => (
              <CarouselItem
                key={index}
                className="flex-none w-[90%] sm:w-[45%] md:w-[30%] lg:w-[20%] text-center"
              >
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-3 text-base md:text-lg bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg"
                    onClick={() => searchJobHandler(cat)}
                  >
                    {cat}
                  </Button>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 lg:left-6 text-white" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 lg:right-6 text-white" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default CateroryCarousel;
