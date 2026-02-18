import { Lato, Merriweather } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import StoreProvider from "@/components/StoreProvider/StoreProvider";

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
        <StoreProvider>
          <TanStackProvider>
            <AuthProvider>
              <Header />
              <main>{children}</main>
            </AuthProvider>
          </TanStackProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
