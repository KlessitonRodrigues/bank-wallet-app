import {
  ButtonBlue,
  ButtonGreen,
  ButtonRed,
  ButtonYellow,
} from "src/lib/base/buttons/Button";
import { ButtonOutline } from "src/lib/base/buttons/ButtonOutline";
import { Card } from "src/lib/base/cards/Card";
import { Column, Row } from "src/lib/base/containers/Flex";
import Page from "src/lib/base/containers/Page";
import Header from "src/lib/components/Header";
import {
  PiFloppyDiskBack,
  PiPaintBrushBold,
  PiPen,
  PiPlusBold,
  PiTrashBold,
} from "react-icons/pi";

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
            <ButtonBlue>
              <PiPlusBold size={18} />
              Adicionar
            </ButtonBlue>
            <ButtonGreen>
              <PiFloppyDiskBack size={18} />
              Salvar
            </ButtonGreen>
            <ButtonRed>
              <PiTrashBold size={18} />
              Remover
            </ButtonRed>
            <ButtonYellow>
              <PiPen size={18} />
              Editar
            </ButtonYellow>
            <ButtonOutline>
              <PiPaintBrushBold size={18} />
              Limpar
            </ButtonOutline>
          </Row>
        </Column>
      </Card>
    </Page>
  );
};

export default HomePage;
