import SignInForm from "@/components/auth/signin-form";
import Link from "next/link";

function Page() {
  return (
    <>
      <div className="w-[70%] self-end min-w-sm">
        <div className="mb-6">
          <h1 className="text-2xl text-white mb-3">Login</h1>
          <span className="text-white">
            <span>
              Create account{" "}
              <Link
                className="text-amber-300 underline underline-offset-1 hover:text-white transition "
                href={"/sign-up/1"}
              >
                Sign up
              </Link>
            </span>
          </span>
          <SignInForm />
        </div>
        <div className="flex items-center gap-2.5 mb-10">
          <span className="w-full h-[1px] bg-[#4D4D4D]" />
          <span className="text-white">OR</span>
          <span className="w-full h-[1px] bg-[#4D4D4D]" />
        </div>
      </div>
    </>
  );
}

export default Page;
