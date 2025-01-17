import { useState, useEffect } from "react";
import type { Response } from "./types";

const domain = "http://localhost:3000";

const useData = () => {
  const [data, setData] = useState<Response>([]);

  const fetchData = async () => {
    try {
      // simulate delay with setTimeout
      setTimeout(async () => {
        const response = await fetch(`${domain}/data.json`);
        const jsonData = await response.json();
        setData(jsonData);
      }, 2000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //stop infinite fetching by wrapping in useEffect
  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useData;
