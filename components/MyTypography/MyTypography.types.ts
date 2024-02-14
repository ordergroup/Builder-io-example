import {TypographyProps} from "@mui/material";

export type MyTypographyProps = {
    variant: TypographyProps['variant'];
    content: string;
    align?: TypographyProps['align']
    className?: string;
}