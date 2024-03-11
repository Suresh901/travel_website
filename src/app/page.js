import Availability from "./pages/availability/Availability"
import CategoryPage from "./pages/category/CategoryPage"
import ChooseUs from "./pages/chooseus/ChooseUs"
import FeaturesSection from "./pages/featured/FeaturesSection"
import HeroSection from "./pages/herosection/HeroSection"
import Offering from "./pages/offering/Offering"
import WelcomePage from "./pages/welcome/WelcomePage"


const page = () => {
  return (
    <div>
      <HeroSection />
      <CategoryPage />
      <WelcomePage />
      <Offering />
      <Availability />
      <FeaturesSection />
      <ChooseUs />
    </div>
  )
}

export default page