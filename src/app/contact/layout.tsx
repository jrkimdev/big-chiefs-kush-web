import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Big Chiefs Kush',
  description: 'Get in touch with Big Chiefs Kush. We\'re here to help with any questions about our products or services.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
