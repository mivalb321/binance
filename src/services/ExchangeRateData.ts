import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IItemRate } from '../store/redusers/getExchangeRate/types';

export const ExchangeRateData = {
  fetchExchangeRate: createAsyncThunk(
    'rate/fetchExchangeRate',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get<IItemRate[]>(
          'https://api.binance.com/api/v3/ticker/24hr'
        );
        return response.data;
      } catch (e: any) {
        return rejectWithValue(e.message);
      }
    }
  ),
};
