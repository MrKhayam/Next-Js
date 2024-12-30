import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
  if (true) {
    redirect('/products?search=Haseeb');
  }
  return (
    <div className='text-center text-xl font-semibold'>
      I am Projects.
    </div>
  );
}

export default page;
