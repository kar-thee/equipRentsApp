import useUserValidations from "../hooks/useUserValidations";

const publicMenuList = [
  { name: "SignIn", path: "/user/signin" },
  { name: "SignUp", path: "/user/signup" },
];

const privateMenuList = [
  { name: "Profile", path: "/user/profile" },
  { name: "WishList", path: "/user/wishlist" },
  { name: "Orders", path: "/user/orders" },
  { name: "SignOut", path: "/user/signout" },
];

const adminMenuList = [
  { name: "Rental Info", path: "/admin/allInfo" },
  { name: "Product CRUD", path: "/admin/crud" },
  { name: "Consumer msg", path: "/admin/consumer_messages" },
];

const MenuListPicker = () => {
  const [checkAuth, isAdmin] = useUserValidations();

  if (isAdmin()) {
    return adminMenuList;
  } else if (checkAuth()) {
    return privateMenuList;
  } else {
    return publicMenuList;
  }
};

export { MenuListPicker, adminMenuList, privateMenuList, publicMenuList };

// {name:"SignIn",path:"/user/signin"}
//["Profile", "WishList", "Orders", "SignOut"];
//View All rentals,product CRUD
