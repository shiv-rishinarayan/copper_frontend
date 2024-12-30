import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { IoMailOutline, IoArrowBack } from "react-icons/io5";
import Footer2 from "@/components/Footer2";
import Link from "next/link";
import { FORGOT_PASSWORD_API } from "@/src/api/authAPI";
import useAxios from "@/src/network/useAxios";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ResetPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const axiosCreate = useAxios();

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Reset email submitted: ", values.email);
    setSubmitted(true);
    setSubmitting(false);
    try {
      let data = {
        email: values.email
      }
      const res = await axiosCreate.post(FORGOT_PASSWORD_API, data);
      if (res.data.message) {
        toast.success(res?.data?.message)
        router.push('./login')
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.response?.data?.error ?? "Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow mt-">
        <div className="flex min-h-screen">
          <div className="w-full flex flex-col justify-center px-10">
            <div className="max-w-md mx-auto w-full">
              {submitted ? (
                <div className="text-center">
                  <IoMailOutline className="w-16 h-16 mx-auto text-accent mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">
                    Check Your Inbox
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We've sent you a special link to reset your password. The
                    email should arrive within a few minutes. Remember to check
                    your spam folder if you don't see it in your inbox.
                  </p>
                  <button
                    onClick={() => router.push("/login")}
                    className="flex items-center justify-center space-x-2 text-accent hover:text-accent-dark mx-auto"
                  >
                    <IoArrowBack className="w-5 h-5" />
                    <span>Return to Login</span>
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl cambay font-semibold mb-4">
                    Reset Password
                  </h2>
                  <p className="text-gray-600 mb-9">
                    Enter your email address below, and we'll help you get back
                    on track with a secure password reset process.
                  </p>
                  <Formik
                    initialValues={{ email: "" }}
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
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 pr-10 placeholder:text-black/40 placeholder:text-sm"
                            />
                            <IoMailOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          </div>
                          {errors.email && touched.email && (
                            <div className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-accent text-white py-2 rounded-sm hover:bg-accent/90 transition-all duration-300 ease-in-out"
                        >
                          Send Reset Link
                        </button>
                      </form>
                    )}
                  </Formik>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
