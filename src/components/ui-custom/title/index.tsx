import {forwardRef, HTMLAttributes} from "react";

import {cn} from "@/lib/utils";

const Title = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => (
  <h1
    ref={ref}
    className={cn(
      "pl-4 font-medium text-2xl leading-none tracking-tight relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-primary before:left-0 before:top-1/2 before:-translate-y-1/2",
      className
    )}
    {...props}
  />
));

Title.displayName = "Title";

export {Title};
