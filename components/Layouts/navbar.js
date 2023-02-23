import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = function () {
  return (
    <header className="bg-rose-700 py-4 px-7 flex">
      <Image
        src={Logo}
        width={50}
        height={45}
        alt="Logo"
        className="mr-32 w-auto h-auto"
      />
      <ul className="flex gap-16 text-white">
        <li>
          <Link href="#">
            OUR
            <br />
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link href="#">
            ABOUT
            <br />
            US
          </Link>
        </li>
        <li>
          <Link href="#">
            LIVE
            <br />
            BETTER
          </Link>
        </li>
        <li>
          <Link href="#">
            CLAIMS & <br />
            SUPPORT
          </Link>
        </li>
        <li>
          <Link href="#">
            MY
            <br />
            ACCOUNT
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
