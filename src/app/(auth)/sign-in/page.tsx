

import SignInForm from '@/components/auth/signin-form';
import SignInWithGoogle from '@/components/sign-in-with-google';
import { Tektur, Share_Tech } from 'next/font/google';
import Link from 'next/link';

const shareTech = Share_Tech({ subsets: ['latin'], weight: '400' });
const tektur = Tektur({ subsets: ['latin'], weight: ['400', '700'] });

function Page() {
  return (
    <>
      <div className="w-[70%] self-end min-w-sm">
        <div className="mb-6">
          <h1
            className={`text-white text-[24px] font-normal leading-[100%] font-[Share_Tech] mb-3 ${shareTech.className}`}
          >
            Login
          </h1>
          <span className="mb-6 inline-block">
            <span
              className={`${tektur.className} text-[#9F9F9F] text-[12px] font-normal leading-[100%] font-[Tektur]`}
            >
              Create account{" "}
              <Link
                className={`${tektur.className} text-[#FCD451] text-[12px] font-normal leading-[100%] font-[Tektur] underline underline-offset-1 hover:text-white transition`}
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
        <SignInWithGoogle />
      </div>
    </>
  );
}

export default Page;
