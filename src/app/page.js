import HeroSection from "./components/HeroSection"
import Availability from "./components/availability/Availability"
import CategoryPage from "./components/category/CategoryPage"
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
    </div>
  )
}

export default page