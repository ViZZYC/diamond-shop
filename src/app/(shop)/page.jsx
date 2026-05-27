import ProductSection from '@/features/products/components/ProductSection'
import MainSection from '@/features/home/components/HeroSection'
import Diamond2 from '@/features/home/components/DiamondSection'
import InformationSection from '@/features/home/components/InformationSection'

export default function ShopHomePage() {
  return (
    <>
      <MainSection />
      <ProductSection />

      <InformationSection />
      <Diamond2 />

    </>
  )
}
