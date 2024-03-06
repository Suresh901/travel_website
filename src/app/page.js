import HeroSection from "./components/HeroSection"
import Availability from "./components/availability/Availability"
import CategoryPage from "./components/category/CategoryPage"
import ChooseUs from "./components/chooseus/ChooseUs"
import FeaturesSection from "./components/featured/FeaturesSection"
import Offering from "./components/offering/Offering"
import WelcomePage from "./components/welcome/WelcomePage"

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