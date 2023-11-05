import {configureStore } from '@reduxjs/toolkit';
import  homeReducer  from '../Slices/Home-slices';

export const store = configureStore ({
    reducer:{
        home : homeReducer
    }
})