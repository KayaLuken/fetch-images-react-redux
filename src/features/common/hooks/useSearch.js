import { filter } from "ramda";
import { useState, useEffect } from "react";


export function useSearch(isMatching, items){
    const [searchTerm, setSearchTerm] = useState('')
    const [matchingItems, setMatchingItems] = useState(items)

    useEffect(()=> {
        const newMatchingItems = searchTerm === '' ? items : filter(isMatching(searchTerm), items)
        setMatchingItems(newMatchingItems)
    }, [searchTerm, items, isMatching])

    return [searchTerm, setSearchTerm, matchingItems]
}