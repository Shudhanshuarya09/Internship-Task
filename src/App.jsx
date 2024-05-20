import Hero from "./Hero/Hero"
import CourseCurriculum from "./Curriculum/Curriculum"
import LimitedTimeBanner from "./Middle/Heading/Heading"
import Offer from "./Middle/Offer/Offer"
import HowItWorks from "./Middle/Working/Working"
import TopCompanies from "./Middle2/CompaniesHiring/Hiring"
import Certificate from "./Middle2/Certificates/Certificates"
import lastPart from "./lastPart/lastPart"

function App() {

  return (
    <>
      <Hero/>
      <CourseCurriculum />
      <LimitedTimeBanner/>
      <Offer/>
      <HowItWorks/>
      <TopCompanies/>
      <Certificate/>
      <lastPart/>
    </>
    
  )
}

export default App
