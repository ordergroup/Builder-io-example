import {createSelector} from "reselect";
import {RootState} from "@/store/store";
import {APP_REDUCER_NAME} from "@/store/appSlice";

const root = (state: RootState) => state[APP_REDUCER_NAME];

const isDarkTheme = createSelector(root, (state) => state.isDarkTheme);
const chartData = createSelector(root, (state) => state.chartData);
const isChartDataLoading = createSelector(root, (state) => state.isChartDataLoading);
const tasks = createSelector(root, (state) => state.tasks);
export const appSelectors = {
    isDarkTheme,
    chartData,
    isChartDataLoading,
    tasks
}