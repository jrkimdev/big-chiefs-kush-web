import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Big Chiefs Kush',
  description: 'Learn about Big Chiefs Kush, our commitment to quality, and our mission to provide premium cannabis products.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
