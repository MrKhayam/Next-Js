'use client'
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
    const pathName = usePathname();
    const [path, setPath] = useState(pathName);
    const searchParam = useSearchParams();

    const [search, setSearch] = useState(searchParam.get('name'));
  return (
    <>
          <h1 className='font-semibold text-center text-xl'>I am Cart Page. And My path is : {pathName}</h1>
          <h1 className='font-semibold text-center text-xl'>I am Cart Page. And My Search Param is : {search}</h1>

    </>
  );
}

export default page;
