'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
          <div className="w-[80%] text-white mx-auto flex items-center justify-between h-14">
              <div className="logo">Khayam Ijaz</div>
              <div className="flex items-center gap-5">
                  <button onClick={() => router.push("/")}>Home</button>
                  <button onClick={() => router.push("/about")}>About</button>
                  <button onClick={() => router.push("/projects")}>Projects</button>
                  <button onClick={() => router.push("/contact")}>Contact</button>
                  <button onClick={() => router.push("/products")}>Products</button>
              </div>
      </div>
    </>
  );
}

export default Navbar;
