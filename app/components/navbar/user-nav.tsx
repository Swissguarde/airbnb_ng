import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function UserNav() {
  const user = true;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-3 rounded-full border p-2 lg:px-4 lg:py-2">
          <HamburgerMenuIcon className="h-6 w-6 lg:h-5 lg:w-5" />
          <PersonIcon className="hidden h-6 w-6 lg:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
              <form className="w-full">
                <button type="submit" className="w-full text-start">
                  AirBnb your HOME
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-homes">My Listings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/favourites">Favourites</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/reservations">Reservations</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/" className="w-full">
                Sign Out
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <Link href="/" className="w-full">
                Register
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/" className="w-full">
                Log In
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
