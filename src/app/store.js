import { configureStore } from '@reduxjs/toolkit';
import advertReducer from '../features/advert/advertSlice';
import createAdvertReducer from '../features/advertForm/advertFormSlice';

export const store = configureStore({
  reducer: {
    advert: advertReducer,
    adForm: createAdvertReducer,
  },
});
