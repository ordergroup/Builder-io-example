import {configureStore} from '@reduxjs/toolkit'
import {APP_REDUCER_NAME, appReducer} from "@/store/appSlice";


export const store = configureStore({
    reducer: {
        [APP_REDUCER_NAME]: appReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch