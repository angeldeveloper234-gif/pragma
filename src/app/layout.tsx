import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import { UserProvider } from '@/context/UserContext';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChatbotManager } from '@/components/ChatbotManager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pragma | Defensa Fiscal Especializada',
  description: 'Firma de Defensa Fiscal & Compliance Fiscal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#0d0c0a] text-white overflow-x-hidden`}>
        <UserProvider>
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
