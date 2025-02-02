import { createSlice } from "@reduxjs/toolkit";


const currentVoter = JSON.parse(localStorage.getItem("currentVoter"))
const initialState = {
    selectedVoteCandidate: "", currentVoter, selectedElection: "", idOfElectionToUpdate: "",
    addCandidateElectionID: ""
}


const voteSlice = createSlice({
    name: 'vote',
    initialState,
    reducers: {
        changeSelectedVoteCandidate(state, action) {
            state.selectedVoteCandidate = action.payload;
        },
        changeSelectedElection(state, action) {
            state.selectedElection = action.payload;
        },
        changeCurrentVoter(state, action) {
            state.currentVoter = action.payload
        },
        changeidOfElectionToUpdate(state, action) {
            state.idOfElectionToUpdate = action.payload;
        },
        changeaddCandidateElectionID(state, action) {
            state.addCandidateElectionID = action.payload;
        },
        resetUser(state) {  // Reset the user state
            state.currentVoter = null;
            state.selectedElection = "";
        }
    }
})


export const voteAction = voteSlice.actions;

export default voteSlice