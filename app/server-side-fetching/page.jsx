import Link from 'next/link';
import React from 'react';

const fetchUsers = async () => {
    try {
        const data = await fetch("https://dummyjson.com/users");
        const response = await data.json();
        return response.users;
    } catch (error) {
        throw new Error(error);
    }
}

const page = async () => {
    const listOfUsers = await fetchUsers();
  return (
    <>
      <div className="w-full min-h-screen flex gap-10 bg-white text-black font-semibold">
        <ul className="flex flex-col p-10 gap-5">
          {listOfUsers && listOfUsers
            ? listOfUsers.map((user, index) => (
                <li className="cursor-pointer" key={index}>
                  <Link href={`/server-side-fetching/${user.id}`}>{user.firstName}</Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}

export default page;
