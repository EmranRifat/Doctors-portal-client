import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://doctors-portal-server-lovat-xi.vercel.app/user/${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data useToken ", data);
          const Token = data.token;
          localStorage.setItem("accessToken", Token);
          setToken(Token);
        });
    }
  }, [user]);

  return [token];
};
export default useToken;
