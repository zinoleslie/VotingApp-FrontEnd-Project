import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-Slice";
import voteSlice from "./vote-slice";
import refreshElectionReducer from "./refreshElelectionSlice"


const store = configureStore({
    reducer: { ui: uiSlice.reducer, vote:voteSlice.reducer, refreshElection: refreshElectionReducer }
})



export default store