import { createSlice } from "@reduxjs/toolkit";


 const currentVoter = {id:"v1", token:"naufvkeagfvkaerv", isAdmin: true}
const initialState = {selectedVoteCandidate:"", currentVoter, selectedElection:"", idOfElectionToUpdate:"",
    addCandidateElectionID:""
}


const voteSlice = createSlice({
    name: 'vote',
    initialState,
    reducers:{
        changeSelectedVoteCandidate(state, action){
            state.selectedVoteCandidate = action.payload;
        },
        changeSelectedElection(state, action){
            state.selectedElection = action.payload;
        },
        changeidOfElectionToUpdate(state, action){
            state.idOfElectionToUpdate = action.payload;
        },
        changeaddCandidateElectionID(state, action){
            state.addCandidateElectionID =  action.payload;
        }
    }
})


export const voteAction = voteSlice.actions;

export default voteSlice