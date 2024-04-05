import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span> {/*shinigami*/}
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-neutral-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 bg-gray-900 text-zinc-100"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          {/* Username Input */}
          <div>
            <label className="label">
              <span className="text-base label-text text-neutral-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-gray-900 text-white"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="label">
              <span className="text-base label-text text-neutral-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-gray-900 text-white"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="label">
              <span className="text-base label-text text-neutral-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full input input-bordered h-10 bg-gray-900 text-white"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* Gender Box */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          {/* Link to Login Page */}
          <Link
            to="/login"
            className="text-black hover:underline hover:text-blue-300 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          {/* Submit Button */}
          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-400"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
