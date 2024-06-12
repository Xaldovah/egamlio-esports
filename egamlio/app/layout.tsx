"use client";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"
import '@/styles/style.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    const user = sessionStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <html lang="en">
      <head>
        <title>Egamlio - Esports and Gaming Courses Website NextJS Template</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={poppins.className}>
        {!user && <Header />}
        {user && (
          <div className="logout-container">
            <button className="btn btn-danger mt-3 logout-button" onClick={handleLogout}>Logout</button>
          </div>
        )}
        {children}
        <Footer />
        <style jsx>{`
          .logout-container {
            display: flex;
            justify-content: flex-end;
            padding: 20px;
          }
          .logout-button {
            margin-left: auto;
          }
        `}</style>
      </body>
    </html>
  )
}
