export const GetUserData = () => {
  if (typeof window !== "undefined") {
    // Ensure code runs only on the client-side
    // Access cookies via document.cookie
    const cookies = document.cookie.split("; ");
    const userDataCookie = cookies.find((cookie) =>
      cookie.startsWith("userData=")
    );

    if (userDataCookie) {
      // Extract and decode the cookie value
      const userData = userDataCookie.split("=")[1];

      try {
        // Parse the user data
        const parsedUserData = JSON.parse(decodeURIComponent(userData));
        // console.log("parsedUserData ----- ", parsedUserData);
        return parsedUserData;
      } catch (error) {
        console.error("Error parsing userData:", error.message);
        return null;
      }
    } else {
      // console.log("userData cookie not found.");
      return null;
    }
  } else {
    console.log("Code is running server-side, document.cookie is unavailable.");
    return null;
  }
};

export const SetUserData = (data) => {
    document.cookie = `userData=${encodeURIComponent(JSON.stringify(data))}; path=/;`;
};
