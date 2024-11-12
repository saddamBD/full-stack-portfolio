"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { useEffect, useState } from "react";

const AnimatedText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};
function CustomHeader() {
  // const aboutRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   document.documentElement.style.scrollBehavior = "smooth";
  //   return () => {
  //     document.documentElement.style.scrollBehavior = "auto";
  //   };
  // }, []);

  // const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div>
      {/* <header className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground py-4 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-xl">Full Stack Developer</p>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#about"
                    onClick={scrollToAbout}
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:underline">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:underline">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}
      <header className="text-center mb-16">
        <Image
          src="/images/saddam.PNG"
          alt="saddam"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold mb-2">
          <AnimatedText text=" Saddam Hossain" />
        </h1>
        <h2 className="text-5xl text-muted-foreground mb-4">
          <AnimatedText text="Full Stack Developer" />
        </h2>
        <div className="flex justify-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/saddamBD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Visit my GitHub profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.linkedin.com/in/saddam-hossain-003609b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent> Connect on LinkedIn </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="mailto:saddam.doict@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Send me an email</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Link
            href="/SaddamHossainResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default CustomHeader;
