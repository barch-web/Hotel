import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Classic Royal Hotel | Imota, Lagos',
  description:
    'Comfortable accommodation, swimming pool relaxation, and event hall bookings along Imota–Igbokuta Road, Lagos.',
  keywords: [
    'Classic Royal Hotel',
    'Hotel in Imota',
    'Imota Igbokuta Road',
    'Hotels in Ikorodu',
    'Swimming pool Imota Lagos',
    'Event hall Imota Lagos',
    'Wedding hall Lagos',
    'Lagos luxury suites',
  ],
  authors: [{ name: 'Classic Royal Hotel' }],
  openGraph: {
    title: 'Classic Royal Hotel | Imota, Lagos',
    description:
      'Comfortable accommodation, swimming pool relaxation, and event hall bookings along Imota–Igbokuta Road, Lagos.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Classic Royal Hotel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Classic Royal Hotel Imota Lagos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Royal Hotel | Imota, Lagos',
    description:
      'Comfortable accommodation, swimming pool relaxation, and event hall bookings along Imota–Igbokuta Road, Lagos.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const hotelStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Classic Royal Hotel',
  image: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
  ],
  description:
    'Comfortable accommodation, swimming pool relaxation, and event hall bookings along Imota–Igbokuta Road, Lagos.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Imota–Igbokuta Road',
    addressLocality: 'Imota',
    addressRegion: 'Lagos State',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.6611,
    longitude: 3.6703,
  },
  telephone: '+2348031234567',
  priceRange: 'GH₵350 - GH₵1,200',
  currenciesAccepted: 'GHS',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Event Hall', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24/7 Power Supply', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Secure Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant & Bar', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24-Hour Security', value: true },
  ],
  checkinTime: '14:00',
  checkoutTime: '12:00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelStructuredData) }}
        />
      </head>
      <body className="bg-[#FAF9F5] text-slate-800 antialiased selection:bg-[#C5A059] selection:text-white dark:bg-[#070D14] dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
