/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export interface FormData {
  location?: { label: string };
  noOfDays?: number;
  budget?: string;
  traveler?: string;
}

export const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleInputChange = (name: string, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { formData, handleInputChange };
};
