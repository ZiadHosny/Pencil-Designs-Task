import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import {
    Box, Button
} from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { TaskRow } from './TaskRow';

export const TaskTable = () => {
    const { tasks } = useAppSelector((state) => state.tasks);

    return (
        <>
            <Box style={{ margin: 30, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained'> Create Task</Button>
            </Box>
            {!tasks?.length || tasks?.length <= 0 ?
                <div>No Tasks Found</div>
                :
                <>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead style={{ background: 'black' }}>
                                <TableRow>
                                    <TableCell align="center">Title</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Is Completed</TableCell>
                                    <TableCell align="center">Tags</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks?.map((task: any, i: any) =>
                                    <TaskRow
                                        task={task} key={`${i}=${task}`} />
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer >
                </>
            }
        </>
    );
}