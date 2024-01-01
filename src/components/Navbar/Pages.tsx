import Link from "next/link";
import navDatas from "./navDatas";
import { DropdownMenuRadioGroupDemo } from "./Dropdown";

function Pages() {
  interface navDataInterface {
    label: string;
    link: string;
  }
  return (
    <ul className="hidden sml:flex gap-5 text-text_gray justify-center items-center">
      {navDatas.map((data: navDataInterface, id: number) => (
        <li
          key={id}
          className="border-b-2 border-transparent hover:border-primary duration-200"
        >
          <Link href={data.link}>{data.label}</Link>
        </li>
      ))}
      <DropdownMenuRadioGroupDemo />
    </ul>
  );
}

export default Pages;
