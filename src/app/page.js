"use client";
import Image from "next/image";
import { useState } from "react";
import "./index.css";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");

  const changefirstname = (event) => {
    setFirstName(event.target.value);
    setFirstName("blue");
  };
  const changelastname = (event) => {
    setLastName(event.target.value);
  };
  const changeusername = (event) => {
    setUserName(event.target.value);
  };

  // const special = /[\d\W]+/;

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);

  const conBtn = () => {
    if (firstName.length >= 2) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
    if (lastName.length >= 2) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
    if (username.length !== 0) {
      setUserNameError(false);
    } else {
      setUserNameError(true);
    }
  };
  // console.log(setFirstNameError);

  return (
    <div className="back">
      <div className="back1">
        <div className="q">
          <div className="q1">
            <img src="/Main 1.svg" alt="pinelogo" className="logo" />
            <p className="emoji">Join Us! 😎</p>
            <p className="word">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="q2">
            <div className="firstNameDiv">
              <p className="firstName">
                First name <span className="od">*</span>
              </p>
              <input
                className="firstInput"
                placeholder="Write your first name"
                onChange={changefirstname}
              ></input>
              {firstNameError && (
                <p className="errorfirst">
                  First name cannot contain special characters or numbers.
                </p>
              )}
            </div>
            <div className="firstNameDiv">
              <p className="firstName">
                Last name <span className="od">*</span>
              </p>
              <input
                className="firstInput"
                placeholder="Write your last name"
                onChange={changelastname}
              ></input>
              {lastNameError && (
                <p className="errorfirst">
                  Last name cannot contain special characters or numbers.
                </p>
              )}
            </div>
            <div className="firstNameDiv">
              <p className="firstName">
                Username <span className="od">*</span>
              </p>
              <input
                className="firstInput"
                placeholder="Write your cool nickname"
                onChange={changeusername}
              ></input>
              {userNameError && (
                <p className="errorfirst">Please write your username.</p>
              )}
            </div>
          </div>
        </div>
        <button className="continueBtn" onClick={conBtn}>
          Continue 1/3{" "}
        </button>
      </div>
    </div>
  );
}
