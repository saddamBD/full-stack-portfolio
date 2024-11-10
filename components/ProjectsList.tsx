import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
            link: "https://e-commerce-mern-f1y7.onrender.com/",
            image: "/ecommerce.png",
          },
          {
            title: "Task Management App",
            description:
              "A real-time task management application using React, Node.js, and Socket.io.",
            link: "https://example.com/project2",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            title: "Weather Dashboard",
            description:
              "A weather dashboard that displays current and forecasted weather using a third-party API.",
            link: "https://example.com/project3",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            title: "Blog Platform",
            description:
              "A full stack blog platform with user authentication and markdown support.",
            link: "https://example.com/project4",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            title: "Fitness Tracker",
            description:
              "A mobile-responsive fitness tracking app with data visualization.",
            link: "https://example.com/project5",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            title: "Recipe Finder",
            description:
              "An app that suggests recipes based on ingredients you have at home.",
            link: "https://example.com/project6",
            image: "/placeholder.svg?height=200&width=300",
          },
        ].map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
