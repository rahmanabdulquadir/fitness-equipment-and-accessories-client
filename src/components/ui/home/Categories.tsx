import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../redux/hooks";
import { selectCategory } from "../../../redux/features/category/categorySlice";
import { categoriesArr } from "../../../utils/categoriesArr";

// import { getUniqueCategoriesByName } from "../../../utils/getUniqueCategories";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCategoryClick = (category: string) => {
    navigate("/products"), dispatch(selectCategory(category));
  };

  // const categories = products ? getUniqueCategoriesByName(products?.data) : [];

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl text-center font-bold mb-10 italic mt-16">
        Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoriesArr?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer border p-4"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="w-full h-48 flex items-center justify-center transform transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
              {/* <span className="text-xl">{category.name}</span> */}
              <img
                className=" w-full h-48 object-cover transform transition duration-500 hover:scale-110"
                src={category.image}
                alt={category.name}
              />
            </div>
            <h2 className="text-center mt-2 text-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
