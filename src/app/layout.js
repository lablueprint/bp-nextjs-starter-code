import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

// TODO: Change this information to reflect the project's title and description
export const metadata = {
  title: "Starter Code",
  description: "Starter Code for Nextjs provided by BP",
};


// TODO: Change the layout if you would like to remove the navbar
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col bg-bar min-h-screen relative">
					<Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
