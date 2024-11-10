import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

function CustomHeader() {
  return (
    <div>
      <header className="text-center mb-16">
        <Image
          src="/saddam.png"
          alt="saddam"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Saddam Hossain</h1>
        <h2 className="text-2xl text-muted-foreground mb-4">
          Full Stack Developer
        </h2>
        <div className="flex justify-center space-x-4">
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
          <Link href="mailto:saddam.doict@gmail.com">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link
            href="/sample_developer_resume.pdf"
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
