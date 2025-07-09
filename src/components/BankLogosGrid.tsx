"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export interface BankLogo {
  name: string;
  src: string;
}

interface BankLogosGridProps {
  logos: BankLogo[];
}

const BankLogosGrid: React.FC<BankLogosGridProps> = ({ logos }) => {
  const [columns, setColumns] = useState<number | null>(null);
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1024) setColumns(6);
      else if (width >= 768) setColumns(4);
      else if (width >= 640) setColumns(3);
      else setColumns(2);

      setIsMobile(width < 640);
      setDirection(document?.dir === "rtl" ? "rtl" : "ltr");
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  if (columns === null) {
    return (
      <div className="h-[170px] w-full rounded-md bg-brandBlue-light animate-pulse" />
    );
  }

  const lastRowStartIndex = Math.floor((logos.length - 1) / columns) * columns;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
      {logos.map((logo, index) => {
        const isLastInRow = (index + 1) % columns === 0;
        const isFirstInRow = index % columns === 0;
        const isInLastRow = index >= lastRowStartIndex;
        const isInFirstRow = index < columns;

        // Bottom border
        let bottomBorderStyle: React.CSSProperties | undefined = undefined;
        if (!isInLastRow) {
          if (isFirstInRow) {
            bottomBorderStyle = {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 1,
              pointerEvents: "none",
              background:
                direction === "rtl"
                  ? "linear-gradient(to left, transparent, #d1d5db 70%)"
                  : "linear-gradient(to right, transparent, #d1d5db 70%)",
            };
          } else if (isLastInRow) {
            bottomBorderStyle = {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 1,
              pointerEvents: "none",
              background:
                direction === "rtl"
                  ? "linear-gradient(to right, transparent, #d1d5db 70%)"
                  : "linear-gradient(to left, transparent, #d1d5db 70%)",
            };
          } else {
            bottomBorderStyle = {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 1,
              pointerEvents: "none",
              borderBottom: "1px solid #d1d5db",
            };
          }
        }

        // Right border (solid on mobile)
        let rightBorderStyle: React.CSSProperties | undefined = undefined;
        if (!isLastInRow) {
          const side = direction === "rtl" ? "left" : "right";

          if (isMobile) {
            rightBorderStyle = {
              position: "absolute",
              top: 0,
              [side]: 0,
              width: 1,
              height: "100%",
              pointerEvents: "none",
              backgroundColor: "#d1d5db", // solid gray border on mobile
            };
          } else {
            if (isInFirstRow) {
              rightBorderStyle = {
                position: "absolute",
                top: 0,
                [side]: 0,
                width: 1,
                height: "100%",
                pointerEvents: "none",
                background:
                  "linear-gradient(to bottom, transparent, #AABAD9 70%)",
              };
            } else if (isInLastRow) {
              rightBorderStyle = {
                position: "absolute",
                top: 0,
                [side]: 0,
                width: 1,
                height: "100%",
                pointerEvents: "none",
                background: "linear-gradient(to top, transparent, #AABAD9 70%)",
              };
            } else {
              rightBorderStyle = {
                position: "absolute",
                top: 0,
                [side]: 0,
                width: 1,
                height: "100%",
                pointerEvents: "none",
                background:
                  "linear-gradient(180deg, rgba(170,186,217,0) 0%, #AABAD9 48.08%)",
              };
            }
          }
        }

        return (
          <div
            key={index}
            style={{
              position: "relative",
              height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              overflow: "hidden",
              direction,
            }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={50}
              style={{
                objectFit: "contain",
                maxHeight: "100%",
                zIndex: 10,
              }}
            />
            {rightBorderStyle && <div style={rightBorderStyle} />}
            {bottomBorderStyle && <div style={bottomBorderStyle} />}
          </div>
        );
      })}
    </div>
  );
};

export default BankLogosGrid;
