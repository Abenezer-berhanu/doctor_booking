import React from "react";
import LatesBlogCard from "./LatesBlogCard";

function LatestBlog() {
  return (
    <div className="py-7 sml:py-14">
      <h1 className="font-bold text-2xl sml:text-4xl text-center">
        Our{" "}
        <span className="text-primary">
          Latest <br /> News &nbsp;
        </span>
        and Advices
      </h1>
      <p className="mx-auto max-w-[800px] text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        quidem enim. Inventore illo veniam architecto, aliquam earum deleniti
        dicta nam, praesentium, accusamus temporibus eos nesciunt autem error
        soluta odit dolore!
      </p>
      <div className="flex gap-4 my-5 max-sm:flex-col items-center w-full px-3">
        <LatesBlogCard />
        <LatesBlogCard />
        <LatesBlogCard />
      </div>
    </div>
  );
}

export default LatestBlog;
