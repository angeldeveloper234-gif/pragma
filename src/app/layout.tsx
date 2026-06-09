import { Metadata } from 'next';
import '../index.css';
import { UserProvider } from '@/context/UserContext';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChatbotManager } from '@/components/ChatbotManager';
import { SplashScreen } from '@/components/SplashScreen';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Pragma | Defensa Fiscal Especializada',
  description: 'Firma de Defensa Fiscal & Compliance Fiscal',
  other: {
    'darkreader-lock': 'meta',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className="min-h-screen overflow-x-hidden">
        <UserProvider>
          <SmoothScroll />
          {/* <SplashScreen /> */}
          <div className="relative min-h-screen">
            <div className="noise-bg" />
            <Navbar />
            {children}
            <Footer />
            <ChatbotManager />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}

 
