import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiSlice = createSlice({
    name: 'apiSlice',
    initialState: { userId: '', password: '',   
    errors: {email:"", password:"", emailStatus:false, passStatus:false},},
    reducers: {
        getEmail: (state, action) => {
            state.userId = action.payload;

            let emailValidate = /\S+@\S+\.\S+/.test(state.userId);

        if(!state.userId){
            state.errors.email="Email is required.";
            state.errors.emailStatus=false;
        }
        else{
            state.errors.email="";
        }
        if(state.userId){
            if(!emailValidate){
            state.errors.email="Email Invalid";
            state.errors.emailStatus=false;
            }
            else{
                state.errors.email="";
                state.errors.emailStatus=true;            
            }
         }
        },
        getPassword: (state, action) => {
            state.password = action.payload;
            let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,14}$/.test(state.password);
        if(!state.password){
            state.errors.password="Password is required.";
            state.errors.passStatus=false;
        }
        else{
            state.errors.password="";
        }
        if(state.password){
            if(!passwordRegex){
            state.errors.password="Password Invalid";
            state.errors.passStatus=false;

            }
            else{
                state.errors.password="";
                state.errors.passStatus=true;

            }
        }
        },
        postData: (state) => {
            const detail = {
                userId: state.userId,
                password: state.password,
            };
            console.log(detail);

            axios.post('http://localhost:3000/postItems', detail)
                .then(response => {
                    console.log('Response:', response);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
    },
});

export const { postData, getEmail, getPassword } = apiSlice.actions;

export default apiSlice.reducer;
