import CategorySlider from "./components/CategorySlider";
import Popular from "./components/Popular";

const CategoryPage = () => {
  return (
    <div
      className="bg-full bg-center h-[941.12px] w-[1,440px]"
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/bg-shape-01.png')",
      }}
    >
      <div className="">
        <CategorySlider />
        <Popular />
      </div>
    </div>
  );
};

export default CategoryPage;
