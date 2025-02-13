import {ReactNode} from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-black via-black to-[#1f1f1f] p-5">
      <div className="w-full">{children}</div>
    </div>
  );
}
