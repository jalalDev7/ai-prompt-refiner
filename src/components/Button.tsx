import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "default" &&
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
          variant === "outline" &&
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-blue-500",
          variant === "ghost" &&
            "text-gray-700 hover:bg-gray-100 focus:ring-blue-500",
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2 text-base",
          size === "lg" && "px-6 py-3 text-lg",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
