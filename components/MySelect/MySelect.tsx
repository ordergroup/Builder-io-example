"use client";
import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from "@mui/material";
import {MySelectProps} from "@/components/MySelect/MySelect.types";

export const MySelect = (props: MySelectProps) => {
    return <>
        <InputLabel>{props.label}</InputLabel>
        <MuiSelect
            {...props}
        >
            {props.items.map(({value, label}, index) => <MenuItem value={value} key={index}>
                {label}
            </MenuItem>)}
        </MuiSelect>
    </>
}