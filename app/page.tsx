import { Metadata } from "next";
import CustomHeader from "@/components/CustomHeader";
import AboutMe from "@/components/AboutMe";

export const metadata: Metadata = {
  title: "Saddam Hossain - Full Stack Developer",
  description:
    "Portfolio of Saddam Hossain, a Full Stack  Developer specializing in React, Next.js, and more.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <CustomHeader />
        <AboutMe />
      </div>
    </main>
  );
}
