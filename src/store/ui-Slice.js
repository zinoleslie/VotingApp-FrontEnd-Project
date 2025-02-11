import { createSlice } from "@reduxjs/toolkit"





const initialState = {
    addCandidateModalshowing: false,
    voteCandidateModalshowing: false,
    electionModalshowing: false,
    updateElectionModalShowing: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        openAddCandidateModalshowing:(state) =>{
            state.addCandidateModalshowing = true
        },
        closeAddCandidateModalshowing:(state)=>{
            state.addCandidateModalshowing = false},

            
        openVoteCandidateModal:(state) =>{
            console.log('openCandidatemodal working')
            state.voteCandidateModalshowing = true
        },
        closeVoteCandidateModal:(state)=>{
            state.voteCandidateModalshowing = false},

        openelectionModalShowing:(state)=>{
            console.log("opening modal...")
            state.electionModalshowing= true
        },
        closeelectionModalShowing:(state)=>{
            console.log("❌ closeelectionModalShowing was called!");
            state.electionModalshowing = false},

            
        openUpdateElectionModal:(state)=>{
            state.updateElectionModalShowing = true
        },
        closeUpdateElectionModal:(state)=>{
            state.updateElectionModalShowing = false
        },

            
    }
})

export const UiActions = uiSlice.actions;

export default uiSlice