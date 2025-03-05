import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

function ProjectsList() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "E-commerce Platform",
            description:
              "A full-featured e-commerce platform built with Next.js, Stripe, and MongoDB.",
            liveLink: "https://e-commerce-mern-f1y7.onrender.com/",
            githubLink: "https://github.com/saddamBD/E-Commerce-MERN",
            image: "/images/ecommerce.PNG",
          },
          {
            title: "crypto-dashboard",
            description:
              "A full-featured crypto-dashboard platform built with Next.js.",
            liveLink: "https://crypto-dashboard-iota-neon.vercel.app/",
            githubLink: "https://github.com/saddamBD/crypto-dashboard",
            image: "/images/cp.PNG",
          },
          {
            title: "Financial dashboard app",
            description:
              "A full-featured Financial dashboard  platform built with Next.js and shadcn.",
            liveLink:
              "https://v0-financial-dashboard-nyz3vw.vercel.app/dashboard",
            githubLink:
              "https://v0-financial-dashboard-nyz3vw.vercel.app/dashboard",
            image: "/images/final-dashboard.PNG",
          },
          {
            title: "Documentation Starter app",
            description:
              "A Documentation Starter app built with Next.js and shadcn.",
            liveLink: "https://documentation-starter-black.vercel.app/",
            githubLink: "https://github.com/saddamBD/documentation-starter",
            image: "/images/doc.PNG",
          },

          {
            title: "Book Store",
            description:
              "A real-time Book Store application using React, Node.js.",
            liveLink: "https://book-list-snowy-one.vercel.app/",
            githubLink: "https://github.com/saddamBD/book-list",
            image: "/images/project2.PNG",
          },
          {
            title: "GSAP APP",
            description: "This is a GSAP app built with react and GSAP.",
            liveLink:
              "https://gsap-app-git-main-saddambds-projects.vercel.app/",
            githubLink: "https://github.com/saddamBD/GSAP-APP",
            image: "/images/gsap.PNG",
          },
          {
            title: "Iphone Site",
            description: "A Stunning Responsive Website built with Next.js.",
            liveLink: "https://iphone-site-xi.vercel.app/",
            githubLink: "https://github.com/saddamBD/iphone-site",
            image: "/images/project3.PNG",
          },
          {
            title: "Food Corner",
            description:
              "A Food Corner website built react that fetches data from an API.",
            liveLink: "https://food-corner-lemon.vercel.app/",
            githubLink: "https://github.com/saddamBD/food-corner",
            image: "/images/project4.PNG",
          },
          {
            title: "React Admin Dashboard",
            description: "React Admin Dashboard with react.",
            liveLink: "https://react-admin-dashboard-ten-kappa.vercel.app/",
            githubLink: "https://github.com/saddamBD/react-admin-dashboard",
            image: "/images/project5.PNG",
          },
          {
            title: "Car Show",
            description:
              "A car show website built with Next.js that fetches data from an API.",
            liveLink:
              "https://car-show-mb17o8t9d-saddambds-projects.vercel.app/",
            githubLink: "https://github.com/saddamBD/car-show-up",
            image: "/images/project6.PNG",
          },
          {
            title: "Parallax site",
            description: "A parallax site built.",
            liveLink:
              "https://parallax-responsive-ih8ioeeer-saddambds-projects.vercel.app/",
            githubLink: "https://github.com/saddamBD/Parallax-responsive-app",
            image: "/images/project7.PNG",
          },
          {
            title: "Secret Key Matcher",
            description: "Secret Key Matcher",
            liveLink:
              "https://secret-key-matcher-h2p47r8sw-saddambds-projects.vercel.app/",
            githubLink: "https://github.com/saddamBD/Secret-Key-Matcher",
            image: "/images/project8.PNG",
          },
          {
            title: "Book store",
            description: "Book store app that displays different books.",
            liveLink: "https://stirring-crumble-8a3394.netlify.app/",
            githubLink: "https://github.com/saddamBD/book-list",
            image: "/images/project9.PNG",
          },
          {
            title: "Movie Correlation App with Python",
            description:
              "In this project we look at what variables effect the gross revenue from movies.",
            liveLink:
              "https://github.com/saddamBD/PortfolioProjects/blob/master/Movie%20%20project.ipynb",
            githubLink:
              "https://github.com/saddamBD/PortfolioProjects/blob/master/Movie%20%20project.ipynb",
            image: "/images/project10.PNG",
          },
          {
            title: "House price web scaping",
            description: "Web Scaping using beautifulSoup python library.",
            liveLink:
              "https://github.com/saddamBD/PortfolioProjects/tree/master/house%20price%20web%20scaping",
            githubLink:
              "https://github.com/saddamBD/PortfolioProjects/tree/master/house%20price%20web%20scaping",
            image: "/images/project11.png",
          },
        ].map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="sm" className="mr-2">
                    <Globe className="h-4 w-4 mr-2" />
                    Live Site
                  </Button>
                </Link>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:hidden"
                >
                  <Button variant="outline" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    Live Site
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
