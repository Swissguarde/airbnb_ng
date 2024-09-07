import Image from "next/image";
import Link from "next/link";
import desktopLogo from "@/public/airbnb-desktop.png";
import mobileLogo from "@/public/airbnb-mobile.webp";
import UserNav from "./user-nav";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between p-5 lg:px-10">
        <Link href="/">
          <Image
            src={desktopLogo}
            alt="logo"
            className="hidden w-32 lg:block"
          />
          <Image src={mobileLogo} alt="logo" className="w-12 lg:hidden" />
        </Link>

        {/* Search Component Here */}
        <UserNav />
      </div>
    </nav>
  );
}
