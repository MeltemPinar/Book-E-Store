import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

const CategoryPage = () => {
  const user = {
    name: "ahmet",
    type: "user",
  };
  if (user.type !== "admin") {
  }

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to={"/category/story"}>Story </NavLink>
        <NavLink to={"/category/novel"}>Novel </NavLink>
      </aside>
      <Outlet />
    </div>
  );
};

export default CategoryPage;
