import {SelectProps as MuiSelectProps} from "@mui/material";
import {MenuItemProps} from "@mui/material";

export type MySelectProps = {
    label: string;
    id: MuiSelectProps['id']
    name: MuiSelectProps['name'],
    items: Array<SelectItem>
    variant?: MuiSelectProps['variant'];
    onChange?: MuiSelectProps['onChange'];
    value?: unknown
}

export type SelectItem = {
    label: string;
    value: MenuItemProps['value']
}