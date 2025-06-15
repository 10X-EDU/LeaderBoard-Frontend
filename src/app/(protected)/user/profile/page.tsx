import Header from "@/components/Header";
import ProfileBackground from "@/components/ProfileBackground";
import ProfileImage from "@/components/ProfileImage";

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
