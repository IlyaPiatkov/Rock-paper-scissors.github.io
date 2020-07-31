import styled from "styled-components"

import { mixinTypography, TypographyType } from "../typography"

type PropsType = {
  bold?: boolean
}

export const Title = styled.h1<TypographyType & PropsType>`
  font-weight: ${p => (p.bold ? 700 : 400)};

  ${mixinTypography}
`
