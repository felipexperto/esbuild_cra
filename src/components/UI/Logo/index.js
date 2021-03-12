import React from "react";

import { Title, Subtitle } from "components";
import { esbuildLogo } from "images";
import * as S from "./style";

const Logo = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <div>
          <img src={esbuildLogo} alt="esbuild Logo" />
        </div>
        <div>
          <Title>esbuild</Title>
          <Subtitle>An extremely fast JavaScript bundler</Subtitle>
        </div>
      </S.Logo>
    </S.Wrapper>
  );
};

export default Logo;
