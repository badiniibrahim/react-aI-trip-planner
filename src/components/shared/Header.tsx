import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useDialog } from "@/hooks/useDialog";
import useAxios from "@/hooks/useAxios";

import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const { openDialog, toggleDialog } = useDialog();
  const axiosInstance = useAxios();

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      getUserProfile(credentialResponse.access_token);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const getUserProfile = async (accessToken: string) => {
    try {
      const response = await axiosInstance.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      toggleDialog();
      window.location.reload();
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };
  return (
    <header className="bg-[#09111f] text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-500 transition">
            AI Trip Planner
          </a>
        </div>

        {user?.email ? (
          <nav className="hidden md:flex space-x-8">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition"
            >
              About
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition"
            >
              Features
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition"
            >
              Pricing
            </Link>
            <a href="/history" className="hover:text-blue-500 transition">
              History
            </a>

            <Popover>
              <PopoverTrigger>
                <img
                  src={user.picture}
                  alt="profile-image"
                  className="rounded-xl  w-[30px] h-[30px]"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </nav>
        ) : (
          <Button onClick={toggleDialog}>Sign In</Button>
        )}
        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <h2> AI Trip Planner</h2>
                <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
                <p>Sign in to the app with Google authentication</p>
                <Button
                  onClick={() => login()}
                  // disabled={loading}
                  className="w-full mt-5 gap-4 items-center"
                >
                  <FcGoogle className="w-7 h-7" />
                  Sign in with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
