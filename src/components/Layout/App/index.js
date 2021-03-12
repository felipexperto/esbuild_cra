import React from "react";

import { Logo } from "components";
import { GlobalStyles } from "styles";
import * as S from "./style";

const App = () => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <Logo />
    </S.Wrapper>
  );
};

export default App;
