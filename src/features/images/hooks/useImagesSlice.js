import { imagesSlice } from "../slice";
import { useSlice } from "../../common/hooks/useSlice";



export const useImagesSlice = () => {
    return useSlice(imagesSlice)
}