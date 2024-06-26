import './globals.css'
import { Inter } from 'next/font/google'
import { getCldOgImageUrl } from 'next-cloudinary';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner'


const inter = Inter({ subsets: ['latin'] })

import Nav from '@/components/Nav';
import Footer from '@/components/Footer'; 

export async function generateMetadata() {
  return {
    title: 'imgto.xyz - Free Image Optimization Toolkit',
    description: 'Improve website performance for free by optimizing your JPG, PNG, WebP, AVIF, and JXL images using imgto.xyz.',
    openGraph: {
      images: [
        getCldOgImageUrl({
          src: 'assets/imgtoxyz-social-card_gxzddx'
        })
      ],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
