"use client";
import { UserButton } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src="/logo.png" alt="logo" width="30" height="30" />
        </div>
        <UserButton afterSignOutUrl="/" />
      </Container>
    </div>
  );
};

export default NavBar;
