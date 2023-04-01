import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const staggerDuration = 0.05;

const TilesAnimation = ({ toggled }: { toggled: boolean }) => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.3 },
  };

  const createGrid = () => {
    let size = document.body.clientWidth > 800 ? 100 : 50;

    let Totalcolumns = Math.floor(document.body.clientWidth / size);
    let Totalrows = Math.floor(document.body.clientHeight / size);
    setColumns(Totalcolumns);
    setRows(Totalrows);
    console.log("total tiles" + Totalcolumns * Totalrows);
  };

  useEffect(() => {
    createGrid();
    function handleWindowResize() {
      createGrid();
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const lastIndex = columns * rows - 1;
  const lastTileX = lastIndex % columns;
  const lastTileY = Math.floor(lastIndex / columns);

  return (
    <div
      className={` border-2 border-transparent h-screen w-screen gap-[1px]`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from(Array(columns * rows)).map((tile, index) => (
        <motion.div
          className=" bg-black"
          key={index}
          initial={false}
          animate={toggled ? "visible" : "hidden"}
          variants={variants}
          transition={{
            delay:
              (Math.abs((index % columns) - lastTileX) +
                Math.abs(Math.floor(index / columns) - lastTileY)) *
              staggerDuration,
            grid: [columns, rows],
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default TilesAnimation;
