import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { SideBar } from '@/components'
import SupabaseProvider from '@/providers/SupabaseProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify-Clone',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <SideBar>
            {children}
          </SideBar>
        </SupabaseProvider>
        </body>
    </html>
  )
}
