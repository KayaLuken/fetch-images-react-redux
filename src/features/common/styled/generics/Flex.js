import { Div } from "./Div"
import styled, {css} from 'styled-components'


const justifyContent = (jc) => {
    return css`justify-content: ${jc}`
}

export const Flex = styled(Div)`
    display: flex;
    ${props => props.justifyContent && justifyContent(props.justifyContent)};
`