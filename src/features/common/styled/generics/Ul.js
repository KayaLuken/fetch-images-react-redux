import { Div } from "./Div"
import styled, {css} from 'styled-components'


const listStyle = (ls) => {
    return css`list-style: ${ls}`
}

export const Ul = styled(Div)`
    ${props => props.listStyle && listStyle(props.listStyle)};
`