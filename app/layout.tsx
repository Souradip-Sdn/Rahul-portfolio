import type { Metadata } from "next";
import "./globals.css";
import FloatingElements from "./components/FloatingElements";

export const metadata: Metadata = {
  title: "Rahul Classes | Expert Tuition for Grades 6–10",
  description:
    "Er. Rahul Das (B.Tech, NIT Agartala) offers expert coaching in Maths, Physics, Chemistry & Biology for students in Grades 6 to 10. Enroll today!",
  keywords: "tuition, classes, maths, physics, chemistry, biology, grades 6-10, NIT Agartala, Rahul Das",
  openGraph: {
    title: "Rahul Classes | Expert Tuition for Grades 6–10",
    description: "Expert coaching by Er. Rahul Das, B.Tech NIT Agartala. Enroll now!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <FloatingElements />
        {children}
      </body>
    </html>
  );
}