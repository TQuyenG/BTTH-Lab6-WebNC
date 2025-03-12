import Header from "@/components/Header";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import "@/styles/global.css"; 

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
