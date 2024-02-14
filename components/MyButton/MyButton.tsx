"use client";
import {MyButtonProps} from "./MyButton.types";
import {Button as MuiButton} from '@mui/material';

export const MyButton = ({
                             label,
                             variant,
                             isDisabled,
                             style,
                             onClick,
                             className,
                             type,
                             isFullWidth,
                             color
                         }: MyButtonProps) => {
    return <MuiButton type={type} variant={variant} disabled={isDisabled} style={style} onClick={onClick} color={color}
                      className={className} fullWidth={isFullWidth}>{label}</MuiButton>
}