"use client";

import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

import {Separator} from "@/components/ui/separator";
import {
  IoBagHandleOutline,
  IoSettingsOutline,
  IoHelp,
  IoLogOutOutline,
  IoGridOutline,
  IoDocumentTextOutline,
  IoPeopleOutline,
  IoMegaphoneOutline,
  IoPricetagOutline,
  IoMenuOutline
} from "react-icons/io5";
import {Logo} from "@/components/ui-custom/logo";
import {Button} from "@/components/ui/button";

export function Sidebar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <aside
        className={cn(
          "fixed -left-full md:left-0 md:static bg-background w-24 h-screen overflow-auto pb-5 flex flex-col items-center justify-between z-50 transition-all duration-150 ease-in-out",
          showSidebar && "left-0"
        )}
      >
        <section>
          <div className="h-20 flex items-center justify-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <ul className="bg-secondary rounded-full p-1 space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150",
                  pathname === "/" && "bg-primary text-white hover:bg-primary"
                )}
              >
                <IoGridOutline className="size-5" />
              </Link>
            </li>
            <li>
              <Link
                href="/leads-management"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150",
                  pathname === "/leads-management" &&
                    "bg-primary text-white hover:bg-primary"
                )}
              >
                <IoPeopleOutline className="size-5" />
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150",
                  pathname === "/products" &&
                    "bg-primary text-white hover:bg-primary"
                )}
              >
                <IoBagHandleOutline className="size-5" />
              </Link>
            </li>
            <li>
              <Link
                href="/transactions"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150",
                  pathname === "/transactions" &&
                    "bg-primary text-white hover:bg-primary"
                )}
              >
                <IoDocumentTextOutline className="size-5" />
              </Link>
            </li>
            <li>
              <Link
                href="/campaigns-management"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150",
                  pathname === "/campaigns-management" &&
                    "bg-primary text-white hover:bg-primary"
                )}
              >
                <IoMegaphoneOutline className="size-5" />
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150",
                  pathname === "/pricing" &&
                    "bg-primary text-white hover:bg-primary"
                )}
              >
                <IoPricetagOutline className="size-5" />
              </Link>
            </li>
          </ul>
          <Separator className="my-5" />
          <ul className="bg-secondary rounded-full p-1 space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150"
                )}
              >
                <IoSettingsOutline className="size-5" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full hover:bg-background transition-colors duration-150"
                )}
              >
                <IoHelp className="size-5" />
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <ul className="bg-secondary rounded-full p-1 space-y-1">
            <li>
              <Link
                href="/auth/login"
                onClick={() => setShowSidebar(false)}
                className={cn(
                  "flex size-10 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-background"
                )}
              >
                <IoLogOutOutline className="size-5" />
              </Link>
            </li>
          </ul>
        </section>
      </aside>
      <Button
        className="fixed top-5 left-5 z-40"
        size="icon"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <IoMenuOutline className="size-5" />
      </Button>
      <div
        role="button"
        onClick={() => setShowSidebar(false)}
        className={cn(
          "fixed z-40 bg-black/70 left-0 top-0 w-full h-full",
          !showSidebar && "hidden"
        )}
      />
    </>
  );
}
