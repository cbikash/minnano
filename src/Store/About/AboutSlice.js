import { createSlice } from "@reduxjs/toolkit";

const AboutSlice = createSlice({
    name: 'about',
    initialState: {
        isLoading: false,
        studyAbout: {},
        notification: false,
    },
    reducers: {
        getStudypage: (state, action) => {
          state.studyAbout = action.payload
        },
        notification: (state,action)=>{
            state.notification = action.payload
        }

    }
})
export const AboutActions = AboutSlice.actions
export default AboutSlice