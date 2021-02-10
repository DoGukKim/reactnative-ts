import styled, {css} from 'styled-components/native';
import {normalizeFontSize} from 'utils/size_config';

type TypoGraphyProps = {
  sm?: boolean;
  lg?: boolean;
  xlg?: boolean;
  bold?: boolean;
  color?: string;
};

// 노멀라이즈 과정을 거친 것은 디바이스 마다 넓이가 다르기 때문에,
// 폰트 자체에 반응적 요소를 적용한 것.

export const Text = styled.Text<TypoGraphyProps>`
  /* basic 16px */
  font-size: ${normalizeFontSize(18)}px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => (props.color ? props.color : 'black')};

  /* xlg 35px*/
  ${(props) =>
    props.xlg &&
    css`
      font-size: ${normalizeFontSize(28)}px;
    `}
  /* lg 26px*/
  ${(props) =>
    props.lg &&
    css`
      font-size: ${normalizeFontSize(22)}px;
    `}
  /* sm 12px*/
  ${(props) =>
    props.sm &&
    css`
      font-size: ${normalizeFontSize(14)}px;
    `}
`;
