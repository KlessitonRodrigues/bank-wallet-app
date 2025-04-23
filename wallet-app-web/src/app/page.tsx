import {
  ButtonBlue,
  ButtonGreen,
  ButtonRed,
  ButtonYellow,
} from "src/lib/base/buttons/Button";
import { ButtonOutline } from "src/lib/base/buttons/ButtonOutline";
import { Card } from "src/lib/base/cards/Card";
import { Row } from "src/lib/base/containers/Flex";
import Page from "src/lib/base/containers/Page";
import Header from "src/lib/components/common/Header";
import {
  PiFloppyDiskBack,
  PiPaintBrushBold,
  PiPen,
  PiPlusBold,
  PiTrashBold,
} from "react-icons/pi";
import { Text } from "src/lib/base/text/Title";
import { Title } from "src/lib/base/text/Text";
import Providers from "src/lib/components/common/Providers";
import SignInForm from "src/lib/components/forms/SignIn";

const HomePage = () => {
  return (
    <Providers>
      <Page>
        <Header />
        <Card>
          <Title>TEST</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum cumque
            facilis dolor sit alias dolorem impedit error sint illo voluptatibus
            corrupti expedita, saepe, rerum, animi voluptates maiores cum minus
            laborum?
          </Text>
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
        </Card>
        <SignInForm />
      </Page>
    </Providers>
  );
};

export default HomePage;
