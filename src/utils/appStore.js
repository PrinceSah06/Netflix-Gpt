import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice'
import movieReducer from '../utils/movieSlice.js'
import gptReducer from './gptSlice.js'
import configReducer from './configSlice.js'


const appStore = configureStore({
    reducer: {
        user: userReducer
        , movies: movieReducer
        , gpt: gptReducer,
        config: configReducer,
    }
})


export default appStore