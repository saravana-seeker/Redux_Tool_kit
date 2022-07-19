import {configureStore} from "@reduxjs/toolkit";
import counterSlicer from "./counter"


export default configureStore({
    reducer:{
        counter:counterSlicer
    }
})