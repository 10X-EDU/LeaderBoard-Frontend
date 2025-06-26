

import SignUpStepOneForm from '@/components/auth/signup-step-one-form';
import { Tektur, Share_Tech } from 'next/font/google';
import Link from 'next/link';

const shareTech = Share_Tech({ subsets: ['latin'], weight: '400' });
const tektur = Tektur({ subsets: ['latin'], weight: ['400', '700'] });

const Page = () => {


  return (
    <>
      <div className="w-[70%] self-end min-w-sm">
        <div className="mb-6">
          <h1 className={`text-white text-[24px] font-normal leading-[100%] font-[Share_Tech] mb-3 ${shareTech.className}`}>
            Create an account
          </h1>
          <span className={`${tektur.className} text-[#9F9F9F] text-[12px] font-normal leading-[100%] font-[Tektur]`}>
            Already have an account?{' '}
            <Link
              className={`${tektur.className} text-[#FCD451] text-[12px] font-normal leading-[100%] font-[Tektur] underline underline-offset-1 hover:text-white transition`}
              href={"/sign-in"}
            >
              Login
            </Link>
          </span>
        </div>
        <SignUpStepOneForm />
      </div>
    </>
  );
};

export default Page;
