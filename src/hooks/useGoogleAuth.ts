import { useCallback } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import useAxios from "@/hooks/useAxios";
import { useDialog } from "@/hooks/useDialog";

interface UseGoogleAuthProps {
  onLoginSuccess: () => void;
  onLoginFailure?: () => void;
}

const useGoogleAuth = ({
  onLoginSuccess,
  onLoginFailure,
}: UseGoogleAuthProps) => {
  const axiosInstance = useAxios();
  const { toggleDialog } = useDialog();

  const getUserProfile = useCallback(
    async (accessToken: string) => {
      try {
        const response = await axiosInstance.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
        );
        localStorage.setItem("user", JSON.stringify(response.data));
        toggleDialog();
        onLoginSuccess();
      } catch (error) {
        console.error("Error fetching user profile", error);
        onLoginFailure && onLoginFailure();
      }
    },
    [axiosInstance, toggleDialog, onLoginSuccess, onLoginFailure]
  );

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      getUserProfile(credentialResponse.access_token);
    },
    onError: () => {
      console.log("Login Failed");
      onLoginFailure && onLoginFailure();
    },
  });

  return { login };
};

export default useGoogleAuth;
