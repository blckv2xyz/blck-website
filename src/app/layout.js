import { ThemeProvider } from "@/components/ThemeSwitcher/ThemeSwitcher";
import "./globals.css";

export const metadata = {
  title: "BLCK",
  description: "Creative production studio out of Copenhagen, Denmark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
