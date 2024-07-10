import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="navbar bg-pink-500 sticky top-0 z-40">
//       <div className="navbar-start flex justify-around">
//         <div className="dropdown   ">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a>
//                 <NavLink to={"/"}>Home</NavLink>
//               </a>
//             </li>
//             <li>
//               <a>
//                 <NavLink to={"/about"}>About</NavLink>
//               </a>
//             </li>
//             <li>
//               <a>Products</a>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a>
//                 <NavLink to={"/cart"}>Cart</NavLink>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <a className="btn btn-ghost text-xl">FitFlex Essentials</a>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex ">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <a>
//               <NavLink to={"/"}>Home</NavLink>
//             </a>
//           </li>
//           <li>
//             <a>
//               <NavLink to={"/about"}>About</NavLink>
//             </a>
//           </li>
//           <li>
//             <details>
//               <summary>Products</summary>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </details>
//           </li>
//           <li>
//             <a>
//               <NavLink to={"products/cart"}>Cart</NavLink>
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* <div className="navbar-end">
//         <a className="btn">Button</a>
//       </div> */}
//     </div>
//   );
// };

// export default Header;


const Header = () => {
  return (
    <div className="navbar bg-white sticky top-0 z-40 drop-shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>
                <NavLink to="/">Home</NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to="/products">Products</NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to="/products/management">Management</NavLink>
              </a>
            </li>
            {/* <li>
              <a>
                <NavLink to="/products/details">Details</NavLink>
              </a>
            </li> */}
            <li>
              <a>
                <NavLink to="/products/cart">Cart</NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to="/products/checkout">Checkout</NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to="/about">About Us</NavLink>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center navbar-center">
         
          <a className="text-xl font-bold ml-2">
            FitFlex Essentials
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>
              <NavLink to="/">Home</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/products">Products</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/products/management">Management</NavLink>
            </a>
          </li>
          {/* <li>
            <a>
              <NavLink to="/products/details">Details</NavLink>
            </a>
          </li> */}
          <li>
            <a>
              <NavLink to="/products/cart">Cart</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/products/checkout">Checkout</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/about">About Us</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
