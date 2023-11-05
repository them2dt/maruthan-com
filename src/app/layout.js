import './styles/globals.css'
import './styles/home.css'
import './styles/section-window.css'
import './styles/intro-grid.css'

export const metadata = {
  title: 'MARUTHAN.COM',
  description: 'WEB DEVELOPEMENT & WEB DESIGN.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
