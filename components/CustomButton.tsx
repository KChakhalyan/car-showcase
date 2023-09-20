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
 * @param {string} props.textStyles - The text styles for the button title.
 * @param {string} props.rightIcon - The URL of the right icon image.
 * @returns {JSX.Element} - The rendered CustomButton component.
 */
const CustomButton = ({
   title,
   containerStyles,
   handleClick,
   btnType,
   textStyles,
   rightIcon,
}: CustomButtonProps) => {
   return (
      <button
         disabled={false}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
      >
         <span className={`flex-1 ${textStyles}`}>{title}</span>
         {rightIcon && (
            <div className="relative w-5 h-6">
               <Image src={rightIcon} alt="right icon" fill className="object-contain" />
            </div>
         )}
      </button>
   );
};

export default CustomButton;
