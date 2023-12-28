import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Activity = ({ time }) => {
  const [breakTime, setBreakTime] = useState(0);
  const handleBreakTime = (breakTime) => {
    setBreakTime(breakTime);
  };

  const handleActivityCompleted = () => {
    toast.success("Activity Completed!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="text-center">
      <div className="m-12 ">
        {/* Personal info start */}
        <div className="my-info lg:flex items-center gap-4 mt-4 mx-2">
          <img
            className="w-24 h-24 rounded-full"
            src="/src/images/Tareq-pro.jpg"
            alt=""
            srcset=""
          />
          <div>
            <h1 className="text-2xl font-bold">Nusrat Tareq Pramanik</h1>
            <p>tareq.12610@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mx-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-200 text-black text-center text-2xl font-semibold">
              <th>Profession</th>
              <th>Age</th>
              <th>Favorite Subject</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr className="bg-base-200 text-black text-center text-lg">
              <td>Student</td>
              <td>20 Years</td>
              <td>Science</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Personal info end */}

      {/* Add a break */}
      <div className="mt-8 mx-4">
        <h1 className="text-3xl font-semibold text-black text-center mb-1">
          Add A Break
        </h1>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <div className="flex space-x-4">
            <button
              onClick={() => handleBreakTime(5)}
              className="break-time btn btn-outline rounded-full btn-success"
            >
              5 min
            </button>
            <button
              onClick={() => handleBreakTime(10)}
              className="break-time btn btn-outline rounded-full btn-success"
            >
              10 min
            </button>
            <button
              onClick={() => handleBreakTime(15)}
              className="break-time btn btn-outline rounded-full btn-success"
            >
              15 min
            </button>
            <button
              onClick={() => handleBreakTime(20)}
              className="break-time btn btn-outline rounded-full btn-success"
            >
              20 min
            </button>
            <button
              onClick={() => handleBreakTime(30)}
              className="break-time btn btn-outline rounded-full btn-success"
            >
              30 min
            </button>
          </div>
        </div>
      </div>

      {/* Study Details */}
      <div className="mx-4">
        <h1 className="text-3xl font-semibold text-black text-center mt-8">
          Study Details
          <div className="flex flex-col mt-2">
            <div className="grid h-20 card bg-base-300 rounded-box ">
              <div className="flex justify-around items-center">
                <div>Study time:</div>
                <div>{time} H</div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="grid h-20 card bg-base-300 rounded-box ">
              <div className="flex justify-around items-center">
                <div>Break time:</div>
                <div>{breakTime} Min</div>
              </div>
            </div>
          </div>
        </h1>
      </div>

      {/* activity completed */}
      <div className="flex justify-center">
        <button
          onClick={() => handleActivityCompleted()}
          className="btn btn-success text-3xl font-semibold w-96 h-16 mt-10 mb-2"
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Activity;
