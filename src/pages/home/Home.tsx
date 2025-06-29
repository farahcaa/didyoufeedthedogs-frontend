import React from "react";
import CountdownTimer from "../CountdownTimer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex">Duke and maddie need to be fed in </div>
      <CountdownTimer />
    </div>
  );
};

export default Home;
