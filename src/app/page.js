"use client";
import { useState } from "react";
import "./index.css";
import { StepOne } from "./_features/StepOne";
import { StepTwo } from "./_features/StepTwo";
import { StepThree } from "./_features/StepThree";
import { StepFour } from "./_features/StepFour";

export default function Home() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState();

  const clearLocal = () => {
    if (step === 4) {
      return localStorage.clear;
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const backStep = () => {
    if (step === 1) {
      return;
    } else {
      setStep(step - 1);
    }
  };

  return (
    <>
      {" "}
      {step === 1 && <StepOne handlenextStep={nextStep} />}
      {step === 2 && (
        <StepTwo handlebackStep={backStep} handlenextStep={nextStep} />
      )}
      {step === 3 && (
        <StepThree handlebackStep={backStep} handlenextStep={nextStep} />
      )}
      {step === 4 && <StepFour clearLocal={clearLocal} />}
    </>
  );
}
