import { createSlice } from "@reduxjs/toolkit";


const initialState = { shouldRefreshElection: false }

const refreshElectionSlice = createSlice({
    name: 'refreshElection',
    initialState,
    reducers: {
        triggerRefresh: (state) => {
            state.shouldRefreshElection = true
        },
        resetRefresh: (state) => {
            state.shouldRefreshElection = false
        }
    }
})

export const { triggerRefresh, resetRefresh} =  refreshElectionSlice.actions;

export default refreshElectionSlice.reducer