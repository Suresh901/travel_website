import PopularSlider from "./PopularSlider"

const Popular = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-10">
                <h1 className="text-[#63AB45] bg-[#E1EFE0] p-2 rounded-md">Popular Activities</h1>
                <h1 className="text-[22px] lg:text-[48px]">Explore Real Adventure</h1>
            </div>
            <div>
                <PopularSlider />
            </div>
        </div>
    )
}

export default Popular