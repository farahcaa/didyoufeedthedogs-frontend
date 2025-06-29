import { useEffect, useRef, useState } from "react";

function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchTimer = async () => {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + `api/timer`);
    const data = await res.json(); // expects { seconds: number }
    setTimeLeft(data.seconds);
  };

  useEffect(() => {
    fetchTimer();
  }, []);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [timeLeft]);

  const handleReset = async () => {
    clearInterval(intervalRef.current!);
    await fetch(import.meta.env.VITE_BACKEND_URL + `api/timer/reset`, {
      method: "POST",
    });
    await fetchTimer();
    setDisplayPopUp(false); // Close popup after reset
  };
  console.log(import.meta.env.VITE_BACKEND_URL + `api/timer/reset`);
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-5xl font-mono text-gray-800">
        {timeLeft !== null ? formatTime(timeLeft) : "Loading..."}
      </div>
      <button
        onClick={() => setDisplayPopUp(true)}
        className="px-6 py-3 bg-blue-600 rounded-2xl text-white shadow-xl hover:bg-blue-700"
      >
        Reset Timer
      </button>
      {displayPopUp && (
        <PopUp onReset={handleReset} onClose={() => setDisplayPopUp(false)} />
      )}
    </div>
  );
}

type PopUpProps = {
  onReset: () => void;
  onClose: () => void;
};

const PopUp = ({ onReset, onClose }: PopUpProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        <h2 className="text-lg font-semibold mb-2">Did You Feed The Dogs?</h2>
        <p className="text-sm text-gray-600 mb-4">
          Click the button below to reset the timer.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Close
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
};
