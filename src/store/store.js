import { configureStore } from '@reduxjs/toolkit';
import coreSlice from './coreSlice';

export const store = configureStore({
  reducer: {
    core: coreSlice
  },
});
