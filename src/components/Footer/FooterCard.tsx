import { Button } from "../ui/button";

function FooterCard() {
  return (
    <div className="w-[80%] mx-auto rounded-lg bg-primary flex max-sml:flex-col max-sml:gap-5 justify-between items-center p-5 sml:p-10 -mt-40 font-sans">
        <h1 className="text-xl sml:text-3xl font-bold text-center sml:text-start">
          Latest Updates Subscribers <br />{" "}
          <span className="bg-white text-primary">To Our Newsletter.</span>
        </h1>
        <span>
          <input
            type="email"
            placeholder="Enter Your mail"
            className="h-11 indent-3 text-sm text-black"
          />
          <Button className="bg-bg_black text-white font-semibold rounded-none hover:bg-bg_black hover:bg-opacity-90 h-11">
            Submit
          </Button>
        </span>
      </div>
  )
}

export default FooterCard