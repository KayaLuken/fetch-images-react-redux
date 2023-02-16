import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import {filter, includes, curry, isEmpty } from 'ramda'
import { useSearch } from '../../common/hooks/useSearch'
import { includesIgnoreCase } from '../../common/utils/string'
import { SearchBar } from '../../common/styled/SearchBar'
import { TopicTabs } from '../styled/TopicTabs'
import { ImagesList } from '../styled/ImagesList'
import { useImagesSlice } from '../hooks/useImagesSlice'
import { topicsSelector } from '../selectors'



const matchesSelectedTopic = curry((topic, image) => {
  return includes(topic, image['topics'])
})

const topicsMatchSearchTerm = curry((term, image) => {
  return !isEmpty(
    filter(t => includesIgnoreCase(term, t), image['topics'])
    )
})

const matchesSearch = curry((term, image) => {
  const isMatch = includesIgnoreCase(term)
  return isMatch(image.user) || isMatch(image.description) || topicsMatchSearchTerm(term, image)
})

const getImagesForTopic = (topic, images) => {
  return topic === 'all' ? images : filter(matchesSelectedTopic(topic), images)
}


export function Images() {
  const {data, fetchImages} = useImagesSlice()
  const topics = useSelector( topicsSelector )
  const [topic, setTopic] = useState('all')
  const imagesForTopic = useMemo(() => getImagesForTopic(topic, data), [topic, data])
  const [searchTerm, setSearchTerm, matchingImages] = useSearch(matchesSearch, imagesForTopic)

  useEffect(() => {
    fetchImages()
  }, [fetchImages])


  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <TopicTabs topics={topics} topic={topic} onSelect={setTopic} />
      <ImagesList images={matchingImages} />
    </div>
  )
}
