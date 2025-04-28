"use client";
import Page from "src/lib/base/containers/Page";
import Header from "src/lib/components/common/Header";

import Providers from "src/lib/components/common/Providers";
import SignInForm from "src/lib/components/forms/SignIn";
import { useState } from "react";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { Row } from "src/lib/base/containers/Flex";
import { AnimationBox, AnimationSlide } from "src/lib/base/animations/Slide";
import { Card } from "src/lib/base/cards/Card";
import TableView from "src/lib/components/common/Table";

const HomePage = () => {
  const [step, setStep] = useState(0);

  return (
    <Providers>
      <Page>
        <Header />
        <AnimationBox>
          {step === 0 && (
            <AnimationSlide key={0} to="right">
              <SignInForm />
            </AnimationSlide>
          )}
          {step === 1 && (
            <AnimationSlide key={1} to="right">
              <SignInForm />
            </AnimationSlide>
          )}
          {step === 2 && (
            <AnimationSlide key={2} to="right">
              <SignInForm />
            </AnimationSlide>
          )}
          {step === 3 && (
            <AnimationSlide key={3} to="right">
              <SignInForm />
            </AnimationSlide>
          )}
        </AnimationBox>
        <Row>
          <ButtonBlue onClick={() => setStep(step - 1)}>Previous</ButtonBlue>
          <ButtonBlue onClick={() => setStep(step + 1)}>Next</ButtonBlue>
        </Row>
        <Card>
          <TableView
            headers={[
              { key: "email", label: "Email" },
              { key: "phone", label: "Phone" },
              { key: "rule", label: "Regra" },
              { key: "dob", label: "Data de Nacimento" },
            ]}
            rows={[
              {
                email: "test1@email.com",
                phone: "123123131233",
                rule: "admin",
                dob: "13/02/21",
              },
            ]}
          />
        </Card>
      </Page>
    </Providers>
  );
};

export default HomePage;
