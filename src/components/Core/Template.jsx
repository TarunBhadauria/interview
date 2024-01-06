import SignUpForm from "../SignUp/SignUpForm";
import LoginForm from "../Login/LoginForm";

function Template({ title, description1, description2, image, formType }) {
  // Dummy loading state (currently set to false)
  const loading = false;

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center"> 
      {loading ? (
        // Displaying a spinner if loading is true
        <div className="spinner"></div>
      ) : (
        // Main content when loading is false
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          {/* Left side content: Title, descriptions, and the signup/login form */}
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {/* Rendering the SignUpForm or LoginForm based on formType */}
            {formType === "signup" ? <SignUpForm /> : <LoginForm />}
          </div>
          {/* Right side content: Images */}
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            <img src="" alt="Pattern" width={558} height={504} loading="lazy" />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;

