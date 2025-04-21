"use client";

import {
  ButtonBlue,
  ButtonGreen,
  ButtonRed,
  ButtonYellow,
} from "src/lib/base/buttons/Button";
import { ButtonOutlineBlue } from "src/lib/base/buttons/ButtonOutline";
import { Card, CardRed, CardGreen } from "src/lib/base/cards/Card";
import { Column, Row } from "src/lib/base/containers/Flex";
import Page from "src/lib/base/containers/Page";
import Header from "src/lib/components/Header";

const HomePage = () => {
  return (
    <Page>
      <Header />
      <Card>
        <Column>
          <h1>TEST</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum cumque
          facilis dolor sit alias dolorem impedit error sint illo voluptatibus
          corrupti expedita, saepe, rerum, animi voluptates maiores cum minus
          laborum?
          <Row>
            <ButtonBlue>Adicionar</ButtonBlue>
            <ButtonGreen>Salvar</ButtonGreen>
            <ButtonRed>Remover</ButtonRed>
            <ButtonYellow>Editar</ButtonYellow>
            <ButtonOutlineBlue>Limpar</ButtonOutlineBlue>
          </Row>
        </Column>
      </Card>
    </Page>
  );
};

export default HomePage;
