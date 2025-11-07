import { useEffect, useState } from "react";


const useFetchProductDetails = (id) => {


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDetailsData();
  }, [id]);

  const fetchDetailsData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return{isLoading,data}
};

export default useFetchProductDetails