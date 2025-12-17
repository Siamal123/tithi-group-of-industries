import './globals.css'

export const metadata = {
  title: 'Tithi Work Order',
  description: 'Work order management system',
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
