import React from "react";

const fetchSingleUser = async (id) => {
  try {
    const data = await fetch(`https://dummyjson.com/users/${id}`);
    const response = await data.json();

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const page = async ({ params }) => {
  const param = await params;
  const id = param.details;
  const singleUser = await fetchSingleUser(id);
  return (
    <>
      <div className="w-full min-h-screen bg-white text-black p-10">
        <h1>This is User Detail Page.</h1>
        {singleUser && singleUser ? (
          <div className="user w-96 h-96 rounded-lg bg-white shadow-md flex items-center justify-center flex-col gap-1">
            <div className="flex gap-2">
              <h1>{singleUser.firstName}</h1>
              <h1>{singleUser.lastName}</h1>
            </div>
            <h1>{singleUser.age}</h1>
            <h1>{singleUser.email}</h1>
            <h1>{singleUser.phone}</h1>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default page;
