import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <LoginLink className="flex items-center px-4 py-2 text-white text-sm rounded hover:bg-zinc-200 hover:text-black transition-all">
          Sign up
        </LoginLink>
        <RegisterLink className="flex items-center px-4 py-2 text-white text-sm rounded hover:bg-zinc-200 hover:text-black transition-all">
          Get started
        </RegisterLink>
      </div>
    </nav>
  );
};

export default Nav;
