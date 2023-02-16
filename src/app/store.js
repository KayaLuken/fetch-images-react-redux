import { configureStore } from '@reduxjs/toolkit'
import { all } from "redux-saga/effects"
import createSagaMiddleware from "redux-saga"
import imagesReducer from '../features/images/slice'
import imagesSaga from '../features/images/sagas'

function* rootSaga() {
  yield all([
    imagesSaga(),
  ])
}

let sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    images: imagesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
