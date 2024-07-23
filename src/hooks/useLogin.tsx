import React from "react";
import { useDialog } from "./useDialog";

export const useLogin = () => {
  const { openDialog, toggleDialog } = useDialog();

  return <div>useLogin</div>;
};
