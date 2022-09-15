import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from './../../app/store';
import {fetchHarryPotterMinifigs, fetchMinifigDetails, sendPurchaseRequest} from './minifigsApi';
import Minifigs from './minifigsInterface';

interface Details {
    [key: number]: any;
}

export interface CouponState {
    minifigs: Array<Minifigs>;
    details: Array<any>;
}

const initialState: CouponState = {
    minifigs: [],
    details: [],
};

export const getHarryPotterMinifigs = createAsyncThunk('minifigs/getHarryPotterMinifigs', async () => {
    const response = await fetchHarryPotterMinifigs();
    return response.data;
});

export const getMinifigDetails = createAsyncThunk('minifigs/getMinifigDetails', async (set_num: string) => {
    const response = await fetchMinifigDetails(set_num);
    return response.data;
});

export const buyLegoMinifig = createAsyncThunk('minifigs/getHarryPotterMinifigs', async () => {
    const response = await sendPurchaseRequest();
    return response.data;
});

export const minifigsSlice = createSlice({
    name: 'minifigs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHarryPotterMinifigs.fulfilled, (state, action) => {
                state.minifigs = action.payload.results;
            })
            .addCase(getMinifigDetails.fulfilled, (state, action) => {
                state.details = action.payload.results;
            });
    },
});

export const getMinifigs = (state: RootState) => state.minifigs.minifigs;

export const getMinifigsDetails = (state: RootState) => state.minifigs.details;

export const getCurrentMinifig = (state: RootState) => {
    if (state.minifigs.details.length > 0) {
        const currentMinifig = state.minifigs.minifigs.filter((item: Minifigs) => item.set_num === state.minifigs.details[0].set_num)
        if (currentMinifig.length > 0) {
            return currentMinifig[0]
        } else {
            return {name: "", set_num: "", set_img_url: "", num_parts: ""}
        }
    } else {
        return {name: "", set_num: "", set_img_url: "", num_parts: ""};
    }
}

export default minifigsSlice.reducer;
