import { call, takeEvery, put } from "redux-saga/effects"
import { imagesSlice } from "./slice"
import { fetchImages } from "./api"




export function* fetchImagesSaga() {
    try {
        let result = yield call(fetchImages)
        yield put({type: imagesSlice.actions.fetchImagesSuccess.type, payload: result})
    } catch (errors) {
        console.error(errors)
        yield put({type: imagesSlice.actions.fetchImagesFailure.type, payload: errors})
    }
}


export default function* imagesSaga() {
  yield takeEvery(imagesSlice.actions.fetchImages.type, fetchImagesSaga)
}
