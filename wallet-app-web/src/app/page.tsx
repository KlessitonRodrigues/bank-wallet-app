"use client";

import { useState } from "react";
import { AnimationBox, AnimationSlide } from "src/lib/base/animations/Slide";
import { Button } from "src/lib/base/buttons/Button";
import { Row } from "src/lib/base/containers/Flex";
import { Drawer } from "src/lib/base/drawers/Drawer";
import Providers from "src/lib/components/common/Providers";
import SignInForm from "src/lib/components/forms/SignIn";
import SignUpForm from "src/lib/components/forms/SignUp";

const HomePage = () => {
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <Providers>
      <h1>HOME</h1>
      <Button onClick={() => setModal(!modal)}>Open</Button>
      <Row>
        <AnimationBox>
          <AnimationSlide>{step === 0 && <SignInForm />}</AnimationSlide>
          <AnimationSlide>{step === 1 && <SignUpForm />}</AnimationSlide>
        </AnimationBox>
      </Row>
      <Drawer label="Login" visible={modal} onClose={() => setModal(!modal)}>
        <SignInForm />
      </Drawer>
    </Providers>
  );
};

export default HomePage;
