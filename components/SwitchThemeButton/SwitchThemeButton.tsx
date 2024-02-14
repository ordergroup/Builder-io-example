"use client"
import {useDispatch, useSelector} from "react-redux";
import {appSelectors} from "@/store/appSelectors";
import {MyButton} from "@/components/MyButton";
import {appSliceActions} from "@/store/appSlice";


export const SwitchThemeButton = () => {
    const dispatch = useDispatch();

    const isDarkTheme = useSelector(appSelectors.isDarkTheme);

    return <MyButton onClick={() => dispatch(appSliceActions.setIsDarkTheme(!isDarkTheme))} label="Change theme"/>
}