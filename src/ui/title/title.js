import styled from "styled-components";

import { mixinTypography } from "../typography";

export const Title = styled.h1`
  font-weight: ${p => p.bold ? 700 : 400};

  ${mixinTypography}
`