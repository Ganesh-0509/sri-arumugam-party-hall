import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import OpeningStatement from "./components/OpeningStatement"
import EventCategories from "./components/EventCategories"
import VenueSection from "./components/VenueSection"
import ExperienceGrid from "./components/ExperienceGrid"
import EventPlanner from "./components/EventPlanner"
import ArchitecturalDetail from "./components/ArchitecturalDetail"
import Gallery from "./components/Gallery"
import TestimonialCTA from "./components/TestimonialCTA"
import Location from "./components/Location"
import DateEnquiry from "./components/DateEnquiry"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import StickyMobileBar from "./components/StickyMobileBar"

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <OpeningStatement />
        <EventCategories />
        <VenueSection />
        <ExperienceGrid />
        <EventPlanner />
        <ArchitecturalDetail />
        <Gallery />
        <TestimonialCTA />
        <Location />
        <DateEnquiry />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  )
}
