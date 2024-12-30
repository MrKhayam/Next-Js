import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <>
          <div className="w-[25%] h-[90vh] bg-zinc-600 p-10 flex flex-col gap-5">
              <Link href="/products/category">Category</Link>
      </div>
    </>
  );
}

export default Sidebar;
