import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExchangeRateData } from '../../../services/ExchangeRateData';
import { IItemRate, IItemRateState } from './types';

const initialState: IItemRateState = {
  dataRate: null,
  isLoading: false,
  isError: '',
};

const setError = (state: IItemRateState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const exchangeRateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {},
  extraReducers: {
    [ExchangeRateData.fetchExchangeRate.pending.type]: (state) => {
      state.isLoading = true;
      state.isError = '';
    },
    [ExchangeRateData.fetchExchangeRate.fulfilled.type]: (
      state,
      action: PayloadAction<IItemRate[]>
    ) => {
      state.dataRate = action.payload;
      state.isLoading = false;
    },
    [ExchangeRateData.fetchExchangeRate.rejected.type]: setError,
  },
});

export default exchangeRateSlice.reducer;
