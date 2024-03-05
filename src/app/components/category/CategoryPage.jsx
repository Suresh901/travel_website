import CategorySlider from "./components/CategorySlider"
import Popular from "./components/Popular"

const CategoryPage = () => {
    return (
        <div className="bg-full bg-center h-[Hug (941.12px)] w-[Fixed (1,440px)] pb-10"
            style={{
                backgroundImage: "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/bg-shape-01.png')",
                backgroundPosition: "center calc(50% + 50px)"
            }}>
            <div className="">
                <CategorySlider />
                <Popular />

            </div>
        </div>
    )
}

export default CategoryPage