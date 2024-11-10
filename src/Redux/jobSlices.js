import { createSlice } from "@reduxjs/toolkit";

const jobSlices=createSlice({
    name:"job",
    initialState:{
        jobs:[],
        allAdminJobs:[],
        singleJob:null,
        searchJobByText: "",
        allAppliedJobs:[],
        searchedQuery:""
    },
    reducers:{
        setAllJobs:(state,action)=>{
            state.allJobs=action.payload
        },
        setSingleJob:(state,action)=>{
            state.singleJob=action.payload
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJobs=action.payload
        },
        setSearchJobByText:(state,action)=>{
            state.searchJobByText=action.payload
        }
        ,
        setAllAppliedJobs:(state,action)=>{
            state.allAppliedJobs=action.payload
        },
        setSearchedQuery:(state,action)=>{
            state.searchedQuery=action.payload
        }
    }
})
export const{setAllJobs,setSingleJob,setAllAdminJobs,setSearchJobByText,setAllAppliedJobs,setSearchedQuery}=jobSlices.actions;
export default jobSlices.reducer;