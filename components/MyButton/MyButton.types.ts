import {ButtonProps as MuiButtonProps} from "@mui/material";

export type MyButtonProps = {
    label: string;
    variant?: MuiButtonProps['variant'];
    isDisabled?: boolean;
    style?: MuiButtonProps['style'];
    onClick?: MuiButtonProps['onClick']
    className?: string;
    type?: MuiButtonProps['type']
    isFullWidth?: boolean;
    color?: MuiButtonProps['color'];
}