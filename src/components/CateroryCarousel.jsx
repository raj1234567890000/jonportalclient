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

const category = [
  "Frontend developer",
  "Backend developer",
  "Full stack developer",
  "DevOps engineer",
  "Grapich Designer",
  "Data science",
];
const CateroryCarousel = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const searchJobHandler=(query)=>{
    dispatch(setSearchedQuery(query));
    navigate("/browser")

  }
  return (
    <>
      <div className="category-carousel">
        <Carousel className="w-full max-w-xl mx-auto my-20">
          <CarouselContent>
            {category.map((cat, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
                <Button variant="outline" className="rounded-full" onClick={()=>searchJobHandler(cat)} >
                  {cat}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CateroryCarousel;
