import { useContext } from "react";
import funContext from "./funContext";
const ContextProfile = (props) => {
  const profiles = [
    {
      name: "Ganesh Messwala",
      address:
        "XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,  Thane, Maharashtra",
      mobile: "99348238242",
      tmob: "0251-121324",
      category: "Pure Veg",
      menu: "Rajasthani Thali, Maharashtrian Thali",
      details:
        "1. fixed time, 2. Everyday different menu, 3. 2 times a day serving at doorstep 4. Monthly payment at a time 5. 1 month advance necessary",
      price: "Rs.100",
    },
    {
      name: "Ramesh Messwala",
      address:
        "XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,  Thane, Maharashtra",
      mobile: "99348238242",
      tmob: "0251-121324",
      category: "Pure Veg",
      menu: "Rajasthani Thali, Maharashtrian Thali",
      details:
        "1. fixed time, 2. Everyday different menu, 3. 2 times a day serving at doorstep 4. Monthly payment at a time 5. 1 month advance necessary",
      price: "Rs.100",
    },
    {
      name: "Suresh Messwala",
      address:
        "XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,  Thane, Maharashtra",
      mobile: "99348238242",
      tmob: "0251-121324",
      category: "Pure Veg",
      menu: "Rajasthani Thali, Maharashtrian Thali",
      details:
        "1. fixed time, 2. Everyday different menu, 3. 2 times a day serving at doorstep 4. Monthly payment at a time 5. 1 month advance necessary",
      price: "Rs.100",
    },
  ];

  return (
    
      <funContext.Provider value={{profiles}}>
        {props.children}
      </funContext.Provider>

      
    
  );
};

export default ContextProfile;
