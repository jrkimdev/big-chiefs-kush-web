import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
