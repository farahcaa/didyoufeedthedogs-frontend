import React, { useState } from "react";

const Login = () => {
  const [passcode, setPasscode] = useState<string>("");

  const handleSubmit = () => {
    console.log("Passcode submitted:", passcode);
  };
  return (
    <div className="flex w-full h-full items-center justify-center ">
      <div>
        <div className="text-2xl">Login</div>
        <div>
          <input
            title="passcode"
            type="text"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="border rounded-2xl p-2 my-5"
          />
        </div>
        <div className="flex flex-row-reverse ">
          <button
            className="border rounded-xl p-2 px-4"
            onClick={() => handleSubmit()}
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
