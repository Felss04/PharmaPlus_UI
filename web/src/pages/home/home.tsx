import { Herosection } from '@/features/ui/components/hero-section'
import { Navbar } from '../../features/ui/components/navbar'
import { ProductSection } from '@/features/ui/components/products-section'
import { Features } from '@/features/ui/components/features'
import "@/features/ui/styles/ui.css"
import { Imagegallery } from '@/features/ui/components/image-gallery'
import { Footer } from '@/features/ui/components/footer'
export const Home = () => {
    return (
        <>
            <Navbar />
            <Herosection />
            <ProductSection />
            <Features />
            <Imagegallery />
            <Footer />
        </>
    )
}