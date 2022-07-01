import { createSlice } from "@reduxjs/toolkit";

const AboutSlice = createSlice({
    name: 'about',
    initialState: {
        isLoading: false,
        studyAbout: {}
    },
    reducers: {
        getStudypage: (state, action) => {
          state.studyAbout = action.payload
        },

    }
})
export const AboutActions = AboutSlice.actions
export default AboutSlice