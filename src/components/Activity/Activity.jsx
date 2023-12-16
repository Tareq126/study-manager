import React from "react";

const Activity = () => {
  return (
    <div>
      <div className="activity m-12 ">
        {/* Personal info start */}
        <div className="my-info lg:flex items-center gap-4 mt-4 mx-2">
          <img
            className="w-24 h-24 rounded-full"
            src="/public/Tareq-pro.jpg"
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
      {/* Personal info start */}

      {/* Add a break */}
      <div className="mt-12 mx-4">
        <h1 className="text-3xl font-semibold text-black text-center mb-1">
          Add A Break
        </h1>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <div className="flex space-x-4">
            <button className="btn btn-outline rounded-full btn-success">
              5 min
            </button>
            <button className="btn btn-outline rounded-full btn-success">
              10 min
            </button>
            <button className="btn btn-outline rounded-full btn-success">
              15 min
            </button>
            <button className="btn btn-outline rounded-full btn-success">
              20 min
            </button>
            <button className="btn btn-outline rounded-full btn-success">
              30 min
            </button>
          </div>
        </div>
      </div>

      {/* Study Details */}
      <div className="mx-4">
        <h1 className="text-3xl font-semibold text-black text-center mt-12">
          Study Details
          <div className="flex flex-col mt-2">
            <div className="grid h-20 card bg-base-300 rounded-box ">
              <div className="flex justify-around items-center">
                <div>Study time:</div>
                <div>0</div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="grid h-20 card bg-base-300 rounded-box ">
              <div className="flex justify-around items-center">
                <div>Break time:</div>
                <div>0</div>
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Activity;
