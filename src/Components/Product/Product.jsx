
import ProductContainer from "../productContainer/ProductContainer";
import useFetchProductData from "../../hooks/useFetchProductData";

const Product = () => {

const {isLoading,data} = useFetchProductData()

  if(isLoading){

    return (
      
      <div className="w-[90%] h-[90vh] flex justify-center items-center">
        <p className="text-5xl font-[poppins] ">...Loading</p>
      </div>
    )
  }

  return (
    <>
      <div className="2xl:container mx-auto py-5">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          data.map((items)=>{
            return(
              <ProductContainer key={items.id} data={items}/>
            )
          })
        }
        </div>
      </div>
    </>
  );
};

export default Product;
