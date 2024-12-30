import React from 'react';

const page = async ({ params }) => {
    const value = await params;
    console.log(value.preview);
  return (
    <>
          <h1 className="text-center text-xl font-semibold">
              I am Catch All Routes.
          </h1>
    </>
  );
}

export default page;
