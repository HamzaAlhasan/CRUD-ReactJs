import {createSlice} from '@reduxjs/toolkit';
const storeddata = JSON.parse(localStorage.getItem('users')) || [];
const initialState = {
    users : storeddata,
    name : '',
    email : '',
    age : '',
}
export const homeSlice = createSlice({
    name : 'home',
    initialState,
    reducers : {
        DeleteUsers : (state,action)=>{
            state.users = state.users.filter((user)=>{return user.id !== action.payload.id})
            localStorage.setItem('users',JSON.stringify(state.users));
            console.log(state.users)
        },
        setName : (state,action)=>{
            state.name = action.payload;
        },
        setEmail : (state,action)=>{
            state.email = action.payload;
        },
        setAge : (state,action)=>{
            state.age = action.payload;
        },
        Addusers : (state,action)=>{
            state.users.push(action.payload);
            localStorage.setItem('users',JSON.stringify(state.users));
            console.log(state.users)
            state.name = '';
            state.age = '';
            state.email = '';
        },
        Editusers : (state,action)=>{
            const uu = state.users.find((user)=> user.id == action.payload.id)
            console.log(uu.name)
            if(uu){
                uu.name = action.payload.name;
                uu.email = action.payload.email;
                uu.age = action.payload.age;
            }
        }
    }
})
export const {DeleteUsers,setName,setEmail,setAge,Addusers,Editusers} = homeSlice.actions
export default homeSlice.reducer