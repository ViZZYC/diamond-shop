import SectionHeader from '@/components/layout/SectionHeader'
import Footer from '@/components/layout/Footer'

export default function ShopLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SectionHeader />
      <div className="flex-1 pt-24 md:pt-28">
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
