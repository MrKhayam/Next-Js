"use client";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = () => {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
    );

    return (
      <>
        <div className="w-full min-h-screen p-10">
          <h1>Users Fetched: </h1>
          <ul className="flex flex-col gap-3 p-5">
            {isLoading ? <h1>Loading...</h1> :
              data?.users.map((user, index) => (
                <li className="cursor-pointer" key={index}>
                  <Link href={`/swr-fetch/${user.id}`}>
                    {user.firstName} {user.lastName}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
};

export default page;
