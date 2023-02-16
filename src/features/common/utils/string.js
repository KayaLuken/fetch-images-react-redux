import { curry, includes } from 'ramda'



export const includesIgnoreCase = curry((s1, s2) => {
    return includes(String(s1).toLowerCase(), String(s2).toLowerCase())
})