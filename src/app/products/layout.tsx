import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Big Chiefs Kush',
  description: 'Browse our premium selection of cannabis products including flower, edibles, concentrates, and accessories.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
