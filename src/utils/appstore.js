import { configureStore } from "@reduxjs/toolkit";
import userReducer from  "../utils/userslice";
import moviesReducer from "../utils/movieslice";
import gptReducer from "../utils/gptslice";
import configureReducer from "../utils/configslice"
const appstore = configureStore(
    {
        reducer : {
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configureReducer,
        }

    }
)

export default appstore ;


