import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { HiQuestionMarkCircle } from "react-icons/hi";
// import { Checkmark } from "react-checkmark";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Form1 = ({ data, increment, setData }) => {
  const router = useRouter();
  const [emailVerified, setEmailVerified] = useState(false);
  const handleEmailVerification = async () => {
    const response = await fetch("/api/getOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.email),
    });
    const res = await response.json();
    // console.log(res);
    setEmailVerified(true);
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/users/fetchData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.email),
      });
      const res = await response.json();
      if (res.status === 404) increment();
      else {
        toast.error("User already exists");
        router.push("/Login");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  // const emailRegex=/^[A-Za-z0-9]+(\.[a-zA-Z0-9]+)*@[a-z]+\.[a-z]+$/g; // for normal emails
  const emailRegex =
    /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/g; // for handling sub-domains like .org.in as well
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={[}\]\|\:;"'<,>\.\?\/]).{8,}$/g;

  const [emailState, setEmailState] = useState(0);
  const [passState, setPassState] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [explainPass, setExplainPass] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else {
      const val = e.target.value;
      setPass(e.target.value);
      if (val != "") {
        const res = passRegex.test(val);
        if (res) setPassState(1);
        else {
          setPassState(-1);
          // else setPassState(0);
        }
      } else setPassState(0);
    }
  };

  const handleNext = () => {
    setData({ ...data, email: email, password: pass });
    handleSubmit();
  };

  const validate = (e) => {
    const val = e.target.value;
    if (val != "") {
      const res = emailRegex.test(val);
      // setEmailValid(res);
      if (res) setEmailState(1);
      else setEmailState(-1);
    } else setEmailState(0);
  };

  return (
    <div>
      <form>
        <h3 className={`font-bold text-center ${bebas.className} text-lg`}>
          Create Account
        </h3>
        <div className="px-4">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
                onFocus={() => setEmailState(0)}
                onBlur={validate}
                required
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              {/* <div className="flex items-center">
                {!emailVerified ? (
                  data.email !== "" ? (
                    <button
                      type="button"
                      className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 h-auto"
                      onClick={handleEmailVerification}
                    >
                      Verify
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-blue-400 text-white font-bold py-2 px-4 rounded h-auto cursor-default"
                    >
                      Verify
                    </button>
                  )
                ) : (
                  <Checkmark size="medium" />
                )}
              </div> */}
            </div>
            {emailState == -1 && (
              <div className="text-red-700 text-[12px]">Invalid Email</div>
            )}
          </div>
          <div className="mb-4">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <div className="relative w-full">
                <HiQuestionMarkCircle
                  className="cursor-pointer"
                  onMouseEnter={() => setExplainPass(true)}
                  onMouseLeave={() => setExplainPass(false)}
                />
                {explainPass && (
                  <div className="z-10 absolute left-3 bg-slate-700 text-white px-5 border-b-2 rounded-md">
                    A strong password is a password that has:
                    <ul className="list-disc list-outside">
                      <li>
                        <span className="font-bold">At least</span> one
                        UpperCase English alphabet
                      </li>
                      <li>
                        <span className="font-bold">At least</span> one
                        LowerCase English alphabet
                      </li>
                      <li>
                        <span className="font-bold">At least</span> one special
                        symbol(like {`${"'$'"},${"'@'"}`})
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter a strong password"
              value={pass}
              onChange={handleChange}
              required
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {passState == -1 && (
              <div className="text-red-700 text-[12px]">Weak Password</div>
            )}
            {passState === 1 && (
              <div className="text-green-600 text-[12px]">Strong Password</div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          {email === "" ||
          pass === "" ||
          passState !== 1 ||
          emailState !== 1 ? (
            <button
              type="button"
              className="w-auto bg-blue-400 text-white font-bold py-2 px-4 rounded hover:cursor-default"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="w-auto bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
        <div className="text-center text-sm text-blue-900">Page: 1 of 4</div>
      </form>
    </div>
  );
};

export default Form1;
