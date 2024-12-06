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
    <>
      <div className="category-carousel">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl mx-auto my-20"
        >
          <Carousel>
            <CarouselContent>
              {category.map((cat, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Button
                      variant="outline"
                      className="rounded-full px-4 py-2 text-lg hover:bg-purple-600 hover:text-white transition duration-300"
                      onClick={() => searchJobHandler(cat)}
                    >
                      {cat}
                    </Button>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </>
  );
};

export default CateroryCarousel;
