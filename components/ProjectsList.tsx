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
            githubLink: "https://e-commerce-mern-f1y7.onrender.com/",
            image: "/images/ecommerce.png",
          },
          {
            title: "Task Management App",
            description:
              "A real-time task management application using React, Node.js, and Socket.io.",
            liveLink: "https://example.com/project2",
            githubLink: "https://github.com/yourusername/project2",
            image: "/images/ecommerce.png",
          },
          {
            title: "Weather Dashboard",
            description:
              "A weather dashboard that displays current and forecasted weather using a third-party API.",
            liveLink: "https://example.com/project3",
            githubLink: "https://github.com/yourusername/project3",
            image: "/images/ecommerce.png",
          },
          {
            title: "Blog Platform",
            description:
              "A full stack blog platform with user authentication and markdown support.",
            liveLink: "https://example.com/project4",
            githubLink: "https://github.com/yourusername/project4",
            image: "/images/ecommerce.png",
          },
          {
            title: "Fitness Tracker",
            description:
              "A mobile-responsive fitness tracking app with data visualization.",
            liveLink: "https://example.com/project5",
            githubLink: "https://github.com/yourusername/project5",
            image: "/images/ecommerce.png",
          },
          {
            title: "Recipe Finder",
            description:
              "An app that suggests recipes based on ingredients you have at home.",
            liveLink: "https://example.com/project6",
            githubLink: "https://github.com/yourusername/project6",
            image: "/images/ecommerce.png",
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
