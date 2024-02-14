"use client";
import {Typography as MuiTypography} from "@mui/material";
import {MyTypographyProps} from "@/components/MyTypography/MyTypography.types";

export const MyTypography = ({variant, content, align, className}: MyTypographyProps) => {
    return <MuiTypography variant={variant} align={align} className={className}>{content}</MuiTypography>
}