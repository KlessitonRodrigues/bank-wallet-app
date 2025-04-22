"use client";

import { useQuery } from "react-query";
import { Card } from "src/lib/base/cards/Card";
import { Title } from "src/lib/base/text/Text";

const Header = () => {
  const {} = useQuery({
    queryKey: "test",
    queryFn: () => new Promise((res, rej) => setTimeout(rej, 3000)),
  });

  return (
    <Card>
      <Title>Test App</Title>
    </Card>
  );
};

export default Header;
