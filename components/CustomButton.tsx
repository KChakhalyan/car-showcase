"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

/**
 * CustomButton component.
 *
 * @param {CustomButtonProps} props - The props for the CustomButton component.
 * @param {string} props.title - The title of the button.
 * @param {string} props.containerStyles - The container styles for the button.
 * @param {Function} props.handleClick - The click event handler for the button.
 * @param {string} props.btnType - The type of the button (optional, defaults to "button").
 * @returns {JSX.Element} - The rendered CustomButton component.
 */
const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
   return (
      <button
         disabled={false}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
      >
         <span className={`flex-1 `}>{title}</span>
      </button>
   );
};
export default CustomButton;
