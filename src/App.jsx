import styles from './style'
import stlyes from './style'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Hero,
  Stats,
  Billing,
  Testimonials,
  CTA,
  Footer,
  NotFoundPage,
  PratikWakle,
} from './components'
import {
  ArchitectureWork,
  ConstructionManagementProjects,
  EngineeringWorks,
  InteriorProjects,
  RealEstate,
} from './components/Services'
import { useEffect } from 'react'
// AOS Import
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Pratik } from './assets'
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  return (
    <>
      <div className={` bg-primary ${styles.flexStart} z-2`}>
        <div className={`${stlyes.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${stlyes.boxWidth}`}>
          <div data-aos="fade-up">
            <Stats />
          </div>
          {/* <Business /> */}
          <div data-aos="fade-up">
            <Billing />
          </div>
          <div data-aos="fade-up">
            <Testimonials />
          </div>

          <div data-aos="fade-up">
            <CTA />
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden z-20">
      <div className={`${stlyes.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Add the routes here */}
        <Route path="/contactUs" element={<CTA />} />
        <Route path="/InteriorProjects" element={<InteriorProjects />} />
        <Route
          path="/constructionManagement"
          element={<ConstructionManagementProjects />}
        />
        <Route path="/engineeringWorks" element={<EngineeringWorks />} />
        <Route path="/architectureWork" element={<ArchitectureWork />} />
        <Route path="/realEstate" element={<RealEstate />} />
        <Route path="/PratikWakle" element={<PratikWakle />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </Router>
)

export default App
