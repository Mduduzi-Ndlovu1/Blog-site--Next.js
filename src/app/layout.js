import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'League of Legendary Blog',
  description: 'This is a blog dedicated to interesting interpretations of league of legends lore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>

          <div className="container">
            <div className='wrapper'>
              <Navbar/>
              {children}
              <Footer/>
            </div>

          </div>

          </ThemeProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
