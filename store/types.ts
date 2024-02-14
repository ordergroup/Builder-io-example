export type AppState = {
    isDarkTheme: boolean;
    chartData: {
        labels: string[];
        datasets: { label: string, data: number[], backgroundColor: string }[];
    },
    isChartDataLoading: boolean;
    tasks: {
        title: string;
        description: string;
        id: number;
    }[]
    isLogged: boolean;
}