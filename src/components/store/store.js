import {configureStore} from "@reduxjs/toolkit"
import { todoSlice } from "../TodoSlice"
 const store=configureStore({
    reducer:todoSlice.reducer

})
export default store