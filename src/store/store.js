import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-Slice";
import voteSlice from "./vote-slice";


const store = configureStore({
    reducer: { ui: uiSlice.reducer, vote:voteSlice.reducer }
})



export default store