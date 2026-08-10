import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import LaunchBanner from '@/components/landing/LaunchBanner'
import TrustLogos from '@/components/landing/TrustLogos'
import Benefits from '@/components/landing/Benefits'
import SunatCompliance from '@/components/landing/SunatCompliance'
import HowItWorks from '@/components/landing/HowItWorks'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonials'
import About from '@/components/landing/About'
import ShowcaseTabs from '@/components/landing/ShowcaseTabs'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <Hero />
      <TrustLogos />
      <ShowcaseTabs />
      <LaunchBanner />
      <Benefits />
      <SunatCompliance />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <About />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
