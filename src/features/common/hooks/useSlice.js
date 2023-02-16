import { useSelector, useDispatch } from 'react-redux'
import {map} from 'ramda'


export const useSlice = (slice) => {
    const dispatch = useDispatch()
    const actionCreators = slice.actions
    const dispatches = map((actionCreator) => {
        return () => dispatch({type: actionCreator().type})
    }, actionCreators)
    const sliceState = useSelector(state => state[slice.name])

    return {...dispatches, ...sliceState}
}