import { createSelector } from "reselect"
import {map, pipe, prop, unnest, uniq, prepend} from 'ramda'


export const imagesSelector = state => state.images?.data

const getTopics = pipe(
    map(prop('topics')),
    unnest,
    uniq,
    prepend('all')
)

export const topicsSelector = createSelector(
    [imagesSelector],
    getTopics
)