import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = function () {
  const [hidden, setHidden] = useState(false);
  return (
    <header className="bg-rose-700 py-4 px-7 flex justify-between md:justify-start">
      <div>
        <Image
          src={Logo}
          width={50}
          height={45}
          alt="Logo"
          className="mr-32 w-auto h-auto"
        />
      </div>

      <div className="flex self-center">
        <FiMenu
          onClick={() => setHidden(!hidden)}
          size={30}
          className="text-white relative mr-10 md:hidden"
        />

        <ul
          className={`${
            hidden ? "hidden" : "relative"
          } md:flex gap-16 text-white`}
        >
          <li className="my-5 md:my-0 hover:underline ">
            <Link href="#">
              OUR
              <br />
              PRODUCTS
            </Link>
          </li>
          <li className="my-5 md:my-0 hover:underline">
            <Link href="#">
              ABOUT
              <br />
              US
            </Link>
          </li>
          <li className="my-5 md:my-0 hover:underline">
            <Link href="#">
              LIVE
              <br />
              BETTER
            </Link>
          </li>
          <li className="my-5 md:my-0 hover:underline">
            <Link href="#">
              CLAIMS & <br />
              SUPPORT
            </Link>
          </li>
          <li className="my-5 md:my-0 hover:underline">
            <Link href="#">
              MY
              <br />
              ACCOUNT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
