import styled from "styled-components";
import device from "@styles/utils/breakpoints";

export const Heading1 = styled.h1<{ $colorBlack?: boolean }>`
  font-size: 62px;
  line-height: 1.04;
  font-weight: 700;
  color: #fff;

  @media ${device.M} {
    font-size: 50px;
  }
  @media ${device.S} {
    font-size: 42px;
  }
  ${({ $colorBlack, theme }) => $colorBlack && `color: ${theme.blackLight1}`};
`;

export const Heading2 = styled.h2`
  font-size: 48px;
  line-height: 1.04;
  font-weight: 700;
  color: ${({ theme }) => theme.blackLight1};
  margin-bottom: 20px;

  @media ${device.M} {
    font-size: 46px;
  }
  @media ${device.S} {
    font-size: 42px;
  }
`;

export const BodyText = styled.p`
  font-size: 22px;
  line-height: 1.36;
  color: ${({ theme }) => theme.blackLight1};

  @media ${device.L} {
    font-size: 20px;
  }

  @media ${device.M} {
    font-size: 18px;
  }

  + * {
    margin-top: 15px;
  }
`;
