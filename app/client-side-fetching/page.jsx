'use client'
import React, { useEffect, useState } from 'react';

const page = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchUsers = async () => {
        setLoading(true);
        const data = await fetch("https://dummyjson.com/users");
        const response = await data.json();
        setUsers(response.users);
        if (response.users) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    },[])
  return (
    <>
          <div className="w-full h-screen bg-white text-black p-20">
              <ul className="p-5 flex flex-col gap-5">
                  {
                      !loading ? users.map((singleUser , index) => <li className='cursor-pointer' key={index}>{singleUser.firstName}</li>) : <h1>Loading... Please Wait!</h1>
                  }
              </ul>
      </div>
    </>
  );
}

export default page;
