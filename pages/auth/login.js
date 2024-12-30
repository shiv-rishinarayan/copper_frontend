import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
          <div className="relative w-full lg:w-1/2 h-full hidden lg:block">
            <img
              src="https://media.istockphoto.com/id/482601021/photo/platinum.jpg?s=612x612&w=0&k=20&c=jPAVbe8OIjT7AuiXIWHudn-YLUEAgojThL_mXHk9088="
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Platinum Tracker
              </h1>
              <p className="text-base max-w-xl mb-6">
                Track and manage your data effortlessly with Platinum Tracker.
                Log in to access your account and stay organized.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-10">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-3xl cambay font-semibold mb-6">Login</h2>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2"
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2"
                      />
                      {errors.password && touched.password && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          onChange={handleChange}
                          checked={values.rememberMe}
                          className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                        />
                        <span className="text-sm">Remember Me</span>
                      </label>
                      <a
                        href="/reset-password"
                        className="text-sm text-accent hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-white py-2 rounded-sm hover:bg-accent"
                    >
                      Login
                    </button>
                  </form>
                )}
              </Formik>
              <p className="text-sm text-center mt-6">
                Don't have an account?{" "}
                <a href="/signup" className="text-accent hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer2 />
    </div>
  );
};

export default Login;
