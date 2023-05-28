import './globals.css'
import HomeNew from './page-new'

export const metadata = {
  title: 'NSDEV | Agência criativa',
  description: 'Agência criativa para empresas criativas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
