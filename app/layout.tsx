import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Glonova Pte Ltd - Premium Interior Manufacturing & Renovation | Singapore',
  description: 'Singapore-based manufacturer and interior solutions provider specializing in doors, windows, and full interior renovations. Engineered luxury for modern spaces.',
  keywords: ['interior design', 'manufacturing', 'doors', 'windows', 'renovation', 'Singapore', 'custom joinery', 'luxury interiors'],
  authors: [{ name: 'Glonova Pte Ltd' }],
  openGraph: {
    title: 'Glonova Pte Ltd - Premium Interior Manufacturing & Renovation',
    description: 'Engineered luxury for modern spaces. Specializing in doors, windows, and full interior renovations in Singapore.',
    url: 'https://glonova.com',
    siteName: 'Glonova Pte Ltd',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Glonova Luxury Interior Design',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glonova Pte Ltd - Premium Interior Manufacturing',
    description: 'Engineered luxury for modern spaces.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Glonova Pte Ltd',
              image: '/og-image.jpg',
              '@id': 'https://glonova.com',
              url: 'https://glonova.com',
              telephone: '+65-XXXX-XXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '21 Sembawang Road',
                addressLocality: 'Singapore',
                postalCode: '779079',
                addressCountry: 'SG',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 1.442,
                longitude: 103.814,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
              sameAs: [
                'https://facebook.com/glonova',
                'https://instagram.com/glonova',
                'https://linkedin.com/company/glonova',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
