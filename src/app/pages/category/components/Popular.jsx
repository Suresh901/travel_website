import Heading from "@/app/components/Heading";
import PopularSlider from "./PopularSlider";

const Popular = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10">
        <Heading heading="Popular Activities" title="Explore Real Adventure" />
      </div>
      <div>
        <PopularSlider />
      </div>
    </div>
  );
};

export default Popular;
