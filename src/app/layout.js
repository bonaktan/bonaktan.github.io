import "@/app/globals.css"
import Header from "./ui/header";
import Footer from "./ui/footer";
export const metadata = {
  title: "bonaktan - Home",
  description: "A Portfolio by bonaktan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
