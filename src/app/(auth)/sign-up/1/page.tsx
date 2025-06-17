import SignUpStepOneForm from "@/components/signup-step-one-form";
import Link from "next/link";

const Page = () => {
 

  return (
    <>
      <div className="w-[70%] self-end min-w-sm">
        <div className="mb-6">
          <h1 className="text-2xl text-white mb-3">Login</h1>
          <span className="text-white">
            <span>
              Login to Account{" "}
              <Link
                className="text-amber-300 underline underline-offset-1 hover:text-white transition "
                href={"/sign-in"}
              >
                Sign in
              </Link>
            </span>
          </span>
        </div>
        <SignUpStepOneForm />
      </div>
    </>
  );
};

export default Page;
