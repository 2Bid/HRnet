import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: 'employee',
    initialState : [{
        id: 1,
        firstname: "john",
        lastname: "doe",
        startDate: "",
        department: "",
        dateBirth: "22/08/1998",
        street: "",
        city: "North Pole",
        state: "Alaska",
        zipcode: 99705
    }],
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        createEmployee : (state, action) =>{
            state.push(action.payload)  
        },
        deleteEmployee : (state, action) => {
            state.employe = state.employe.filter((emp)=> emp.id !== action.payload)
        }
    }
});

export const { createEmployee , deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;