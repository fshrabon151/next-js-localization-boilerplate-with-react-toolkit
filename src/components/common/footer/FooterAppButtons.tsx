"use client";

import Image from "next/image";
import { appButtons } from "./FooterData";

export function FooterAppButtons() {
  return (
    <div className="flex justify-start md:justify-end">
      <div className="grid grid-cols-2 md:flex md:flex-col md:justify-center items-center gap-4">
        {appButtons.map(({ href, img, alt }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={img}
              alt={alt}
              width={160}
              height={48}
              className="w-[152px] h-[44px] md:w-[190px] md:h-[55px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
