import { useNavigate } from "react-router-dom";
// import { useGetProductsQuery } from "../../../redux/api/baseApi";
import { TProduct } from "../../../types";
import ProductCard from "../global/ProductCard";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";

const Featured = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ undefined });
 
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate("/products");
  };

   const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading featured products</div>;
  return (
    <>
      <div className="my-8">
        <h2 className="text-3xl text-center font-bold mb-10 italic mt-16">
          Featured
        </h2>
       <div className="flex justify-center">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-28 gap-5">
          {products?.data?.slice(0, 3).map((product: TProduct) => (
            // <div key={product._id} className="lg:w-80 border p-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
            //   <img
            //     src={product.image}
            //     alt={product.name}
            //     className="w-full h-48 object-cover mb-4"
            //   />
            //   <h3 className="font-semibold text-gray-800 text-lg mb-2">{product.name}</h3>
            //   <p className="mb-2">Price: ${product.price}</p>
            //   <button
            //     onClick={() => handleViewDetails(product._id)}
            //     className="btn btn-primary mb-2"
            //   >
            //     View Details
            //   </button>
            // </div>
            <ProductCard _id={product._id} handleViewDetails={handleViewDetails} name={product.name} image={product.image} price={product.price}></ProductCard>
          ))}
        </div>
       </div>
        <div className="text-center mt-10">
          <button
            onClick={handleExploreMore}
            className="btn btn-secondary mt-4"
          >
            Explore More
          </button>
        </div>

      </div>
    </>
  );
};

export default Featured;
