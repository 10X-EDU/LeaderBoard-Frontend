import AuthLayout from '../../../layouts/AuthLayout'
import InputField from '../../../components/InputField'
import SubmitButton from '../../../components/SubmitButton'

const SignUpPage = () => {
  return (
    <AuthLayout isSignin={false}>
      <form className="flex flex-col gap-6">
        <InputField label="First Name" placeholder="Enter your Firstname" componentClasses="" />
        <InputField label="Last Name" placeholder="Enter your Lastname" componentClasses="" />
        <InputField label="Email" placeholder="Enter your Email" componentClasses="" />
        <SubmitButton>
          Continue
        </SubmitButton>
      </form>
    </AuthLayout>
  )
}

export default SignUpPage