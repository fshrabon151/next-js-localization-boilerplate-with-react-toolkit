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
  const [gridInfo, setGridInfo] = useState({
    columns: 2,
    isMobile: true,
    direction: "ltr" as "ltr" | "rtl",
  });
  const [showBorders, setShowBorders] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      const columns =
        width >= 1024 ? 6 : width >= 768 ? 4 : width >= 640 ? 3 : 2;
      const isMobile = width < 640;
      const direction = document?.dir === "rtl" ? "rtl" : "ltr";
      setGridInfo({ columns, isMobile, direction });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // trigger border animation once layout is ready
  useEffect(() => {
    const timeout = setTimeout(() => setShowBorders(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const { columns, isMobile, direction } = gridInfo;
  const lastRowStartIndex = Math.floor((logos.length - 1) / columns) * columns;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
      {logos.map((logo, index) => {
        const isLastInRow = (index + 1) % columns === 0;
        const isFirstInRow = index % columns === 0;
        const isInLastRow = index >= lastRowStartIndex;
        const isInFirstRow = index < columns;

        const borders: React.CSSProperties[] = [];

        // Bottom border
        if (!isInLastRow) {
          const baseBottom: React.CSSProperties = {
            height: 1,
            width: "100%",
            bottom: 0,
            left: 0,
            position: "absolute",
            pointerEvents: "none",
            opacity: showBorders ? 1 : 0,
            transform: showBorders ? "translateY(0px)" : "translateY(4px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          };

          if (isFirstInRow) {
            borders.push({
              ...baseBottom,
              background:
                direction === "rtl"
                  ? "linear-gradient(to left, transparent, #d1d5db 70%)"
                  : "linear-gradient(to right, transparent, #d1d5db 70%)",
            });
          } else if (isLastInRow) {
            borders.push({
              ...baseBottom,
              background:
                direction === "rtl"
                  ? "linear-gradient(to right, transparent, #d1d5db 70%)"
                  : "linear-gradient(to left, transparent, #d1d5db 70%)",
            });
          } else {
            borders.push({
              ...baseBottom,
              borderBottom: "1px solid #d1d5db",
            });
          }
        }

        // Right border
        if (!isLastInRow) {
          const side = direction === "rtl" ? "left" : "right";
          let background: string;

          if (isMobile) {
            background = "#d1d5db";
          } else if (isInFirstRow) {
            background = "linear-gradient(to bottom, transparent, #AABAD9 70%)";
          } else if (isInLastRow) {
            background = "linear-gradient(to top, transparent, #AABAD9 70%)";
          } else {
            background =
              "linear-gradient(180deg, rgba(170,186,217,0) 0%, #AABAD9 48.08%)";
          }

          borders.push({
            background,
            width: 1,
            height: "100%",
            top: 0,
            [side]: 0,
            position: "absolute",
            pointerEvents: "none",
            opacity: showBorders ? 1 : 0,
            transform: showBorders ? "translateX(0px)" : "translateX(4px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          });
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
            {borders.map((style, i) => (
              <div key={i} style={style} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default BankLogosGrid;
