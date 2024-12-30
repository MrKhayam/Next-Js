"use client";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = () => {
  const params = useParams();
  const id = params.details;
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/users/${id}`,
    fetcher
  );
  return (
    <>
      <div className="w-full min-h-screen p-20">
        <h1>User Fetched: </h1>
        <div className="w-96 h-96 flex flex-col items-center justify-center bg-zinc-900 rounded-lg shadow">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="flex flex-col items-center">
              <h1>
                {" "}
                Name: {data?.firstName} {data?.lastName}
              </h1>
              <h1>Age: {data?.age}</h1>
              <h1>Email: {data?.email}</h1>
              <h1>Phone: {data?.phone}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
