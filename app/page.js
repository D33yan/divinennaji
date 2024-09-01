import { AboutCards } from "./components/AboutCard"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/Hero"
import { NavBar } from "./components/Navbar"

export default function Home() {
  return (
    <div className="bg-base-200 text-white  w-full font-sans">
        <NavBar/>
        <HeroSection/>
        <AboutCards/>
        <Footer/>
    </div>
  )
}
