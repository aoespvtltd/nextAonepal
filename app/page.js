import GoalAndObj from "@/components/Home/GoalAndObj"
import HeroSection from "@/components/Home/HeroSection"
import ProjectBar from "@/components/Projects/ProjectBar"
import OurTeams from "@/components/Home/OurTeams"
import Header from "@/components/Header/Header"
import MobileHeader from "@/components/Header/MobileHeader"
import Footer from "@/components/Footer/Footer"

function Home() {
  return (
    <div>
        <HeroSection />
        <GoalAndObj />
        <ProjectBar />
        <OurTeams />
        {/* <Footer /> */}

    </div>
  )
}

export default Home
