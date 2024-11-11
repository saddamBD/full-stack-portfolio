import React from "react";
import { Badge } from "@/components/ui/badge";

function Skill() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2 ">
        {[
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Python",
          "MongoDB",
          "PostgreSQL",
          "Docker",
          "Prisma",
          "Tailwind CSS",
          "Framer Motion",
          "shadcn ui",
          "drizzle ORM",
          "convex",
          "sanity CMS",
        ].map((skill) => (
          <Badge key={skill} variant="secondary" className="text-2xl">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default Skill;
