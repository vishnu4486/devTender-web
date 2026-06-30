import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:null,
    reducers:{

        addConncection:(state,action)=>{
            return action.payload
        },
        removeConncection:(state)=>{
            return  null
        }
    }
})
export const { addConncection,removeConncection} =connectionSlice.actions
export default connectionSlice.reducer