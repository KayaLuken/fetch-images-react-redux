import { Flex } from "../../common/styled/generics/Flex"
import { Ul } from "../../common/styled/generics/Ul"
import { Img } from "../../common/styled/generics/Img"



export function ImagesList(props){

    return (
        <Flex justifyContent={'center'}>
            <Ul listStyle={'none'}>
                {props.images.map(i => {
                    return (
                        <Flex justifyContent={'center'}>
                            <li>
                                <Img key={i.id} height={300} width={300} padding={'10px'} src={i.url} alt={i.description} />
                            </li>
                        </Flex>
                        )
                    })
                }
            </Ul>
        </Flex>   
    )
}