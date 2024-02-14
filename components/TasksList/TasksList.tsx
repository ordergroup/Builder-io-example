import {List, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import {MyButton} from "@/components/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {appSliceActions} from "@/store/appSlice";
import {appSelectors} from "@/store/appSelectors";

export const TasksList = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(appSelectors.tasks);

    return <>
        <List>
            {tasks.map((el, index) => <ListItem sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderBottom: '1px solid grey',
                paddingBottom: '6px'
            }}
                                                key={index}
            >
                <Typography variant="body1" gutterBottom>{el.title}</Typography>
                <Typography variant="body1" gutterBottom>{el.description}</Typography>
                <MyButton variant="outlined" label="Delete" color="error" isFullWidth
                          onClick={() => dispatch(appSliceActions.deleteTask(el.id))}/>
            </ListItem>)}
        </List>
    </>
}