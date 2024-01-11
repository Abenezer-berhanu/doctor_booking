"use client";
import { useState } from "react";
import { Button } from "../ui/button";

function TextAccordino() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <p className="text-text_gray text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
        similique. Perferendis, provident a? Fugiat corporis, asperiores
        aspernatur maxime saepe debitis voluptatem facere, totam harum suscipit
        vel, et vero eos id!
      </p>
      {display && (
        <>
          <p className="text-text_gray text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            similique. Perferendis, provident a? Fugiat corporis, asperiores
            aspernatur maxime saepe debitis voluptatem facere, totam harum
            suscipit vel, et vero eos id!
          </p>
          <p className="text-text_gray text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            similique. Perferendis, provident a? Fugiat corporis, asperiores
            aspernatur maxime saepe debitis voluptatem facere, totam harum
            suscipit vel, et vero eos id!
          </p>
        </>
      )}
      <Button
        className="text-white bg-primary rounded-3xl w-fit text-sm"
        onClick={() => setDisplay(!display)}
        size={"sm"}
      >
        {display ? "read less" : "read more"}
      </Button>
    </>
  );
}

export default TextAccordino;
