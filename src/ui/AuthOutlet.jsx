import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AuthOutlet() {
  const user = useSelector((state) => state.auth.user);

  if (user?.email) {
    return <Outlet />;
  }

  return <Navigate to={"/login"} />;
}

export default AuthOutlet;
