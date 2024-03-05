
import OfferingSlider from './components/OfferingSlider';


const Offering = () => {
    return (
        <div className="bg-fixed h-screen w-full  flex flex-col items-center justify-center" style={{ backgroundImage: "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-02.jpg')" }}>
            <h1 className='text-secondary bg-[#2d3b2b] p-2 rounded-md'>What are we offering </h1>
            <h1 className='text-white text-[48px] text-center pb-20'>Feel real adventure and very <br className='hidden md:block' /> close to nature</h1>
            <div className='w-full '>
                <OfferingSlider />
            </div>
        </div>
    );
};

export default Offering;
