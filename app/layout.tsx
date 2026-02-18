import { Lato, Merriweather } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const lato = Lato({
  variable: "--font-Lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-Merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${merriweather.variable}`}>
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
          </AuthProvider>
        </TanStackProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "10px",
              maxWidth: "100%",
            },
          }}
        />
      </body>
    </html>
  );
}
