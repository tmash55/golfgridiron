import React from "react";
import { useDispatch } from "react-redux";
import authService from "@/appwrite/auth";
import { logout } from "@/redux/authSlice";
import CustomButton from "./CustomButton";
function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().catch.then(() => {
      dispatch(logout());
    });
  };

  return (
    <CustomButton
      onClick={logoutHandler}
      className="bg-red-600 text-slate-50 rounded-xl"
    >
      Logout
    </CustomButton>
  );
}

export default LogoutBtn;
