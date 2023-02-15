import { configureStore } from '@reduxjs/toolkit';
import { employeeSlice } from './actions';

export const store = configureStore({
  reducer: employeeSlice
});
