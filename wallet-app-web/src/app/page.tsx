"use client";

import { useState } from "react";
import { AnimationBox, AnimationSlide } from "src/lib/base/animations/Slide";
import { Card } from "src/lib/base/cards/Card";
import Providers from "src/lib/components/common/Providers";
import SignInForm from "src/lib/components/forms/SignIn";
import SignUpForm from "src/lib/components/forms/SignUp";

const HomePage = () => {
  const [step, setStep] = useState(0);

  return (
    <Providers>
      <h1>HOME</h1>
      <AnimationBox>
        <AnimationSlide key={0}>
          {step === 0 && (
            <Card>
              <SignInForm />
            </Card>
          )}
        </AnimationSlide>
        <AnimationSlide key={1}>
          {step === 1 && (
            <Card>
              <SignUpForm />
            </Card>
          )}
        </AnimationSlide>
      </AnimationBox>
    </Providers>
  );
};

export default HomePage;
