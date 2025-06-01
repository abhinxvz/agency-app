import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="p-6 md:p-10 flex items-center justify-between z-40 bg-black bg-opacity-10 text-black dark:text-white">
      <div className="flex items-center gap-3">
        <Link className="cursor-pointer text-1xl font-bold" href="/">
          {/* Add your brand name or logo text here if needed */}
        </Link>
        <Image
          priority
          src="/logo/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-10 h-10 md:w-16 md:h-16 rounded-full"
        />
      </div>
      <div className="cursor-pointer hidden md:flex space-x-12 items-center">
        <Link
          href="#"
          className="transition bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:from-blue-400 hover:to-purple-500"
        >
          Website Design
        </Link>
        <Link
          href="#"
          className="transition bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:from-blue-400 hover:to-purple-500"
        >
          Graphic Design
        </Link>
        <Link
          href="#"
          className="transition bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:from-blue-400 hover:to-purple-500"
        >
          Shopify Stores
        </Link>
        <Link
          href="#"
          className="transition bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:from-blue-400 hover:to-purple-500"
        >
          Brands
        </Link>
        <Link
          href="#"
          className="transition bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:from-blue-400 hover:to-purple-500"
        >
            Pricing
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;