"use client";

import Header from "@/components/header/header";
import ProfileBackground from "@/components/profile/profile-background";
import ProfileImage from "@/components/profile/profile-image";

function Page() {
  return (
    <div>
      <Header />
      <main className="max-w-[60%] bg-black mx-auto">
        <ProfileBackground />
        <div className="flex gap-3.5">
          <ProfileImage />
        </div>
      </main>
    </div>
  );
}

export default Page;
