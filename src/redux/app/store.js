import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

//Create store
export const store = configureStore ({
    reducer:{
        allCart:cartSlice
    }
})
