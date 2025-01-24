import { Herosection } from '@/features/ui/components/hero-section'
import { ProductSection } from '@/features/ui/components/products-section'
import { Features } from '@/features/ui/components/features'
import { Imagegallery } from '@/features/ui/components/image-gallery'
import { Footer } from '@/features/ui/components/footer'
export const Home = () => {
    return (
        <>
            <Herosection />
            <ProductSection />
            <Features />
            <Imagegallery />
            <Footer />
        </>
    )
}