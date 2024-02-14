"use client";
import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/system";
import {List, ListItem} from "@mui/material";
import {MyTypography} from "@/components/MyTypography";
import {DashboardAccordionProps} from "@/components/DashboardAccordion/DashboardAccordion.types";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `none`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    background: 'linear-gradient(to right, #009fff, #ec2f4b)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    borderRadius: '8px'
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    position: 'relative',
    display: 'block',
    padding: 0,
    paddingLeft: '36px',
    paddingRight: "18px",
    "&::before": {
        content: "''",
        display: 'block',
        position: 'absolute',
        top: '6px',
        left: '21px',
        height: '100%',
        width: '2px',
        background: '#119dfc'
    }
}));

export const DashboardAccordion = ({items, title, isDefaultExpanded}: DashboardAccordionProps) => {
    return (
        <div>
            <Accordion defaultExpanded={isDefaultExpanded}>
                <AccordionSummary>
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {items.map(({label}, index) => <ListItem sx={{
                            borderBottom: '1px solid gray', '&:hover': {
                                color: '#9b6aa1',
                                cursor: 'pointer'
                            }
                        }}
                                                                 key={index}
                        >
                            <MyTypography variant="body1" content={label}/>
                        </ListItem>)}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}