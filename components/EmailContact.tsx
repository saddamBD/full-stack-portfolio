import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

function EmailContact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <p className="text-lg text-muted-foreground mb-4">
        Iam always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <Link href="mailto:saddam.doict@gmail.com">
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Button>
      </Link>
    </section>
  );
}

export default EmailContact;
