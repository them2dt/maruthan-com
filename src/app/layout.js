import './styles/globals.css'
import './styles/room.css'
import './styles/projects.css'
import './styles/blog.css'
import './styles/socials.css'

export const metadata = {
  title: 'MARUTHAN.COM',
  description: 'WEB DEVELOPEMENT & WEB DESIGN.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  )
}
