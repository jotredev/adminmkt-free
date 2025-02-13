import * as React from "react";

import {cn} from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({className, type, ...props}, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-full border border-input bg-background px-4 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:ring-2 focus:ring-primary ring-offset-2 ring-offset-background",
          className
        )}
        ref={ref}
        autoComplete="off"
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export {Input};
