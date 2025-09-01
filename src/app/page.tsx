import EverythingYouNeed from '@/components/Home/everything-you-need'
import HeroSection from '@/components/Home/hero-section'
import LogoTicker from '@/components/Home/logo-ticker'
import PricingSection from '@/components/Home/pricing-section'
import Product from '@/components/Home/product'
import Signup from '@/components/Home/sign-up'
import Testimonials from '@/components/Home/testimonials'

export default function home() {
    return (
        <div>
            <HeroSection />
            <LogoTicker />
            <Product />
            <EverythingYouNeed />
            <PricingSection />
            <Testimonials />
            <Signup />
        </div>
    )
}
