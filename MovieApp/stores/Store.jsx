import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from '../Slices/UserSlice'
const Store=configureStore({
    reducer:{
        authReducer:AuthSlice,
    }
})
export default Store;