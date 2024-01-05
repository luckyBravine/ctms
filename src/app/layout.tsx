"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {AuthContextProvider} from "./context/AuthContext";
import { useRouter, usePathname } from 'next/navigation'
import ProtectedRoute from './components/ProtectedRoute'


const noAuthRequired = ['/', '/login', '/signup']

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'CTMS',
//   description: 'Classmate Timetable Management System',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body >
        <AuthContextProvider>
        {noAuthRequired.includes(pathname) ? (
        children
      ) : (
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
      )}
        
        </AuthContextProvider>
        </body>
    </html>
  )
}
