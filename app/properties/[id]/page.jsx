"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";

const PropertyPage = async () => {
  const {id} = useParams();

  const [property, setProperty] = useState(null);


  return <div>PropertyPage</div>;
};

export default PropertyPage;

// import {
//   useParams,
//   useRouter,
//   useSearchParams,
//   usePathname,
// } from "next/navigation";

// const PropertyPage = () => {
//   const router = useRouter();
//   const { id } = useParams();
//   const searchParams = useSearchParams();
//   const pathname = usePathname();

//   // queries -> useSearchParams eg. name='john'
//   const name = searchParams.get("name");
