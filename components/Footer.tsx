import { TooltipProvider } from "@radix-ui/react-tooltip";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="footer border z-8 border-t-[#33356F] border-l-transparent border-r-transparent text-Black">
      <div className="container p-4 flex justify-between">
        <span>Copyright © 2024</span>
        <div className="hover:cursor-pointer hover:scale-110">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://leetcode.com/u/saddam2020/">
                  <Image
                    src="/images/leetcode.png"
                    alt="LeetCode"
                    width={40}
                    height={40}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>My LeetCode profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-Black">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
