import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();

  return (
    <div className="container py-6">
      <img
        src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"
        className="img-fluid rounded mx-auto d-block"
      />
      <p className="text-center fs-3 my-4">
        Üzgünüz, aradığınız sayfa bulunamadı
      </p>
      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={"/"}>
          Home
        </Link>
      </div>
      {state && (
        <p className="fss-3 text-center my-4">
          Hata kodunuz
          <span className="badge bg-warning mx-4">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
