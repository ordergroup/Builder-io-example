"use client";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "@/store/types";

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const initialState: AppState = {
    isDarkTheme: true,
    chartData: {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    },
    isChartDataLoading: false,
    tasks: [],
    isLogged: false
};

export const APP_REDUCER_NAME = "APP"

export const appSlice = createSlice({
    name: APP_REDUCER_NAME,
    initialState,
    reducers: {
        setIsDarkTheme: (state, action: PayloadAction<boolean>) => {
            state.isDarkTheme = action.payload;
        },
        fetchChartData: (state) => {
            state.isChartDataLoading = true;
            setTimeout(() => {
                state.isChartDataLoading = false;
            }, 2000);
            state.chartData.datasets = [
                {
                    label: 'Dataset 1',
                    data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    data: labels.map(() => Math.floor((Math.random() * 100) + 1)),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ]
        },
        changeProfileData: (state, action: PayloadAction<unknown>) => {
            alert("changeProfileData action, check console for more data")
            console.log("changeProfileData: ", action.payload);
        },
        addTask: (state, action: PayloadAction<{ title: string, description: string }>) => {
            console.log("actionPayload: ", action.payload);
            state.tasks.push({
                ...action.payload,
                id: state.tasks.length + 1
            })
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(el => el.id !== action.payload);
        },
        setIsLogged: (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload;
        },
    },
});

export const appSliceActions = appSlice.actions
export const appReducer = appSlice.reducer;