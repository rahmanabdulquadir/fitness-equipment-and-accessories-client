import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/api/baseApi";
import { useAppDispatch } from "../../../redux/hooks";
import { selectCategory } from "../../../redux/features/category/categorySlice";
import { categories } from "../../../utils/categories";
// import { getUniqueCategoriesByName } from "../../../utils/getUniqueCategories";

const Categories = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);
  console.log(products?.data);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCategoryClick = (category: string) => {
    navigate("/products"), dispatch(selectCategory(category));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  // const categories = products ? getUniqueCategoriesByName(products?.data) : [];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer border p-4"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="w-full h-48 flex items-center justify-center">
              {/* <span className="text-xl">{category.name}</span> */}
              <img
                className="w-full h-48 object-contain"
                src={category.image}
                alt={category.name}
              />
            </div>
            <h2 className="text-center mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;