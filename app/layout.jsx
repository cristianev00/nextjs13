import AuthProvider from '@/components/AuthProvider'
import './globals.css'

export const metadata = {
  title: 'SIARH',
  description: 'Ministerio de Medio Ambiente y Agua',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </AuthProvider>
    
  )
}
