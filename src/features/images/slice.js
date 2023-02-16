import { createSlice } from '@reduxjs/toolkit'
import {filter} from 'ramda'


const initialState = {
    data: [],
    errors: false,
    fetching: false
}

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImages: (state, action) => {
        state.errors = false
        state.fetching = true
    },
    fetchImagesSuccess: (state, action) => {
        const rawData = action.payload['photos']
        const cleanData = filter(i => !i.url.includes('undefined'), rawData)
        state.data = cleanData
        state.errors = false
        state.fetching = false
    },
    fetchImagesFailure: (state, action) => {
        state.errors = action.payload
        state.fetching = false
    }
}
})

export const { fetchImages, fetchImagesSuccess, fetchImagesFailure } = imagesSlice.actions
export default imagesSlice.reducer
