import Template from "../../components/Core/Template"

function Login() {
  return (
    // Template Component Used for Modularising and dynamic rendering for the Login page
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image="https://res.cloudinary.com/di1qrcflg/image/upload/v1689752049/login_vjlnon.webp"
      formType="login"
    />
  )
}

export default Login