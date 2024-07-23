import { useState } from "react";

export const useDialog = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const toggleDialog = () => setOpenDialog(!openDialog);
  return { openDialog, toggleDialog };
};
