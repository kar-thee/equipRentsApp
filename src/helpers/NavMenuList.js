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

export { publicMenuList, privateMenuList, adminMenuList };

// {name:"SignIn",path:"/user/signin"}
//["Profile", "WishList", "Orders", "SignOut"];
//View All rentals,product CRUD
