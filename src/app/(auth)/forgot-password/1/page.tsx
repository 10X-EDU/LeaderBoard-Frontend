import ForgotPasswordForm from "@/components/forgot-password-form"

const page = () => {
    return (
        <div className="flex justify-end items-center px-26">
            <div className="self-end text-white ">
                <h1 className="text-2xl font-bold mb-3">Forgot Password?</h1>
                <span className="mb-9 inline-block text-[#9F9F9F]">Enter your registered email, and we’ll email you a code to reset your Password.</span>
                <ForgotPasswordForm />
            </div>
        </div>
    )
}

export default page