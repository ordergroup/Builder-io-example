import {TextFieldProps} from "@mui/material";

export type MyTextFieldProps = {
    id: TextFieldProps['id'];
    label: TextFieldProps['label'];
    defaultValue?: TextFieldProps['defaultValue'];
    helperText?: TextFieldProps['helperText'];
    variant: TextFieldProps['variant'];
    type?: TextFieldProps['type']
}