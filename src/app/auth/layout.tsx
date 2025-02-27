import {ReactNode} from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className="relative h-[100dvh] overflow-auto flex items-center justify-center bg-gradient-to-b from-black via-black to-[#1f1f1f] lg:p-10">
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
