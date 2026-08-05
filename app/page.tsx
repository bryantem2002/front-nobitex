import Header from '@/components/landing/Header'
import OfferBanner from '@/components/landing/OfferBanner'
import Hero from '@/components/landing/Hero'
import IntegrationsBanner from '@/components/landing/IntegrationsBanner'
import TrustLogos from '@/components/landing/TrustLogos'
import Problems from '@/components/landing/Problems'
import Benefits from '@/components/landing/Benefits'
import DashboardPreview from '@/components/landing/DashboardPreview'
import FeatureCarousel from '@/components/landing/FeatureCarousel'
import HowItWorks from '@/components/landing/HowItWorks'
import Metrics from '@/components/landing/Metrics'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonials'
import About from '@/components/landing/About'
import ShowcaseTabs from '@/components/landing/ShowcaseTabs'
import FinalCTA from '@/components/landing/FinalCTA'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <OfferBanner />
      <Hero />
      <IntegrationsBanner />
      <ShowcaseTabs />
      <TrustLogos />
      <Problems />
      <Benefits />
      <DashboardPreview />
      <FeatureCarousel />
      <HowItWorks />
      <Metrics />
      <Pricing />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
