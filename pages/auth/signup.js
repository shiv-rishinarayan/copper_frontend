// import React from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import Navbar from "@/components/Navbar";
// import Footer2 from "@/components/Footer2";
// import { useRouter } from "next/router"; // Use next/router instead of next/navigation
// import Footer from "@/components/Footer";
// import useAxiosPrivate from "@/src/network/useAxiosPrivate";
// import { BASE_URL, SIGNUP_API } from "@/src/api/authAPI";
// import { toast } from "react-hot-toast";
// import axios from "axios";

// const validationSchema = Yup.object().shape({
//   fullName: Yup.string()
//     .min(2, "Full name must be at least 2 characters")
//     .required("Full name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[a-zA-Z]/, "Password must contain at least one letter")
//     .matches(/[0-9]/, "Password must contain at least one number")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm password is required"),
//   termsAccepted: Yup.boolean().oneOf(
//     [true],
//     "You must accept the terms and conditions"
//   ),
// });

// const Signup = () => {
//   const router = useRouter();
//   const axiosCreate = useAxiosPrivate();

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(false);
//     try {
//       let data = {
//         name: values.fullName,
//         email: values.email,
//         password: values.password,
//         confirmPassword: values.confirmPassword,
//       }

//       const res = await axios.post(BASE_URL + SIGNUP_API, data);
//       // const res = await axiosCreate.post(SIGNUP_API, data);
//       console.log("res ---- " + JSON.stringify(res))
//       if (res?.data) {
//         router.push("./email-sent")
//         toast.success(res?.data?.messsage ?? "Registration successfully")
//       }
//     } catch (error) {
//       console.error("Error during Registration: ", error);
//       toast.error("Something went wrong, please try again.")
//     }

//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow mt-16">
//         <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
//           <div className="relative w-full lg:w-1/2 h-full hidden lg:block">
//             <img
//               src="https://media.istockphoto.com/id/482601021/photo/platinum.jpg?s=612x612&w=0&k=20&c=jPAVbe8OIjT7AuiXIWHudn-YLUEAgojThL_mXHk9088="
//               alt="Background"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-75"></div>
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10">
//               <h1 className="text-4xl font-bold mb-4">Join Platinum Tracker</h1>
//               <p className="text-base max-w-xl text-white/80 tracking-wide">
//                 Create your account today and start managing your data with our
//                 powerful tracking tools.
//               </p>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-10 overflow-y-auto">
//             <div className="max-w-md mx-auto w-full py-8">
//               <h2 className="text-3xl cambay font-semibold mb-6">Sign Up</h2>
//               <Formik
//                 initialValues={{
//                   fullName: "",
//                   email: "",
//                   password: "",
//                   confirmPassword: "",
//                   termsAccepted: false,
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, { setSubmitting }) => {
//                   handleSubmit(values, { setSubmitting });
//                 }}
//               >
//                 {({
//                   values,
//                   errors,
//                   touched,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                   isSubmitting,
//                 }) => (
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div>
//                       <input
//                         type="text"
//                         name="fullName"
//                         placeholder="Full Name"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.fullName}
//                         className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
//                       />
//                       {errors.fullName && touched.fullName && (
//                         <div className="text-red-500 text-sm mt-1">
//                           {errors.fullName}
//                         </div>
//                       )}
//                     </div>

//                     <div>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email Address"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.email}
//                         className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
//                       />
//                       {errors.email && touched.email && (
//                         <div className="text-red-500 text-sm mt-1">
//                           {errors.email}
//                         </div>
//                       )}
//                     </div>

//                     <div>
//                       <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.password}
//                         className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
//                       />
//                       {errors.password && touched.password && (
//                         <div className="text-red-500 text-sm mt-1">
//                           {errors.password}
//                         </div>
//                       )}
//                     </div>

//                     <div>
//                       <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.confirmPassword}
//                         className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
//                       />
//                       {errors.confirmPassword && touched.confirmPassword && (
//                         <div className="text-red-500 text-sm mt-1">
//                           {errors.confirmPassword}
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex items-start space-x-2 pt-7">
//                       <input
//                         type="checkbox"
//                         name="termsAccepted"
//                         onChange={handleChange}
//                         checked={values.termsAccepted}
//                         className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
//                       />
//                       <span className="text-sm">
//                         I agree to the{" "}
//                         <a href="#" className="text-accent hover:underline">
//                           Terms and Conditions
//                         </a>{" "}
//                         and{" "}
//                         <a href="#" className="text-accent hover:underline">
//                           Privacy Policy
//                         </a>
//                       </span>
//                     </div>
//                     {errors.termsAccepted && touched.termsAccepted && (
//                       <div className="text-red-500 text-sm mt-1">
//                         {errors.termsAccepted}
//                       </div>
//                     )}

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-accent text-white py-2 rounded-sm hover:bg-accent/90 transition-all duration-300 ease-in-out"
//                     >
//                       Create Account
//                     </button>
//                   </form>
//                 )}
//               </Formik>
//               <p className="text-sm text-center mt-6">
//                 Already have an account?{" "}
//                 <button
//                   onClick={() => router.push("/auth/login")}
//                   className="text-accent hover:underline"
//                 >
//                   Login
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import useAxiosPrivate from "@/src/network/useAxiosPrivate";
import { BASE_URL, SIGNUP_API } from "@/src/api/authAPI";
import { toast } from "react-hot-toast";
import axios from "axios";
import SEO from "@/components/SEO";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  termsAccepted: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const Signup = () => {
  const router = useRouter();
  const axiosCreate = useAxiosPrivate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    try {
      let data = {
        username: values.fullName,
        name: values.fullName,
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };

      const res = await axios.post(BASE_URL + SIGNUP_API, data);
      // const res = await axiosCreate.post(SIGNUP_API, data);
      console.log("res ---- " + JSON.stringify(res));
      if (res?.data) {
        router.push("./email-sent");
        toast.success(res?.data?.messsage ?? "Registration successfully");
      }
    } catch (error) {
      console.error("Error during Registration: ", error);
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Sign Up - Create Your Account"
        description="Join us today! Create your account to access powerful tools, manage your watchlist, and stay updated with PGM market trends."
        keywords="sign up, create account, registration, join now, stock market tools, investment platform, market trends,PGM Tracker"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/auth/signup"
      />

      <Navbar />
      <main className="flex-grow mt-16">
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
          <div className="relative w-full lg:w-1/2 h-full hidden lg:block">
            <img
              src="https://media.istockphoto.com/id/482601021/photo/platinum.jpg?s=612x612&w=0&k=20&c=jPAVbe8OIjT7AuiXIWHudn-YLUEAgojThL_mXHk9088="
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10">
              <h1 className="text-4xl font-bold mb-4">Join Platinum Tracker</h1>
              <p className="text-base max-w-xl text-white/80 tracking-wide">
                Create your account today and start managing your data with our
                powerful tracking tools.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-10 overflow-y-auto">
            <div className="max-w-md mx-auto w-full py-8">
              <h2 className="text-3xl cambay font-semibold mb-6">Sign Up</h2>
              <Formik
                initialValues={{
                  fullName: "",
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  termsAccepted: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values, { setSubmitting });
                }}
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
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
                      />
                      {errors.fullName && touched.fullName && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.fullName}
                        </div>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
                      />
                      {errors.username && touched.username && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.username}
                        </div>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
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
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
                      />
                      {errors.password && touched.password && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 placeholder:text-black/40 placeholder:text-sm"
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    <div className="flex items-start space-x-2 pt-7">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        onChange={handleChange}
                        checked={values.termsAccepted}
                        className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                      />
                      <span className="text-sm">
                        I agree to the{" "}
                        <a href="#" className="text-accent hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-accent hover:underline">
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                    {errors.termsAccepted && touched.termsAccepted && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.termsAccepted}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-white py-2 rounded-sm hover:bg-accent/90 transition-all duration-300 ease-in-out"
                    >
                      Create Account
                    </button>
                  </form>
                )}
              </Formik>
              <p className="text-sm text-center mt-6">
                Already have an account?{" "}
                <button
                  onClick={() => router.push("/auth/login")}
                  className="text-accent hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
