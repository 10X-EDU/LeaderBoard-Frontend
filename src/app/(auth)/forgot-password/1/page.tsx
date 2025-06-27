import ForgotPasswordForm from "@/components/auth/forgot-password-form"

const page = () => {
    return (
        <div className="flex justify-end items-center pl-26">
            <div className="self-end text-white ">
                <h1 className="mb-3 text-white text-[24px] font-normal leading-[100%] font-[Share_Tech]">Forgot Password?</h1>
                <span className="mb-9 inline-block text-[#9F9F9F] font-[Tektur] text-[12px] font-normal leading-[18px]">Enter your registered email, and we’ll email you a code to reset your Password.</span>
                <ForgotPasswordForm />
            </div>
        </div>
    )
}

export default page