"use client";
import {TextField, TextFieldProps} from "@mui/material";
import {MyTextFieldProps} from "@/components/MyTextField/MyTextField.types";

export const MyTextField = ({className, value, name, onChange, ...props}: MyTextFieldProps &
    {
        className?: string,
        value: string,
        name: string,
        onChange: TextFieldProps['onChange'],
        error: TextFieldProps['error'],
        onBlur: TextFieldProps['onBlur']
    }
) => {
    return <TextField className={className} sx={{width: '100%'}}
                      {...props}
    />
}