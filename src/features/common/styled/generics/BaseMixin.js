import { css } from "styled-components"



export const padding = (p) => {
    return css`padding: ${p}`
}

export const BaseMixin = css`
    ${props => props.padding && padding(props.padding)};
`

