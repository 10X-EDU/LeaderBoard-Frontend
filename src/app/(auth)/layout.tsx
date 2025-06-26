import Image from "next/image";
import "../globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex">
      <div className="grid-lines flex flex-col justify-center w-full h-full sm:w-1/2 md:min-w-[646px] relative backdrop-blur-sm bg-[#0B0B0B3D] bg-black px-16 py-32 border-r-[#FFFFFFCC] border-r-1 gradient-border">
        {children}
      </div>
      <img
        src={"/assets/background.png"}
        alt="background"
        className="w-full h-full aspect-video object-center object-cover overflow-hidden"
      />
    </div>
  );
}
