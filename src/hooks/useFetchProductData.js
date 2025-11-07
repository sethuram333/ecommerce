import { useEffect, useState } from "react";

const useFetchProductData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);

      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {isLoading,data}
};

export default useFetchProductData