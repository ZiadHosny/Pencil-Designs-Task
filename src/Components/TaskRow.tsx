import {
    Checkbox,
    Chip,
    TableRow,
    TableCell,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Task } from '../utils/types';
import { useState } from 'react';
import { DeleteAlert } from './DeleteAlert';
import { useAppDispatch } from '../store/hooks';
import { tasksActions } from '../store/slices/tasksSlice';
import { toast } from 'react-toastify';

export const TaskRow = ({ task }: { task: Task }) => {
    const dispatch = useAppDispatch()
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    // Open Delete Alert
    const handleClickOpen = (id: string) => {
        setOpenDeleteAlert(true);
        setSelectedId(id)
    };

    // Toggle Task Complete 
    const checkCompleteTask = (taskId: string) => {
        dispatch(tasksActions.toggleTaskCompleted(taskId));
        toast.success("Task Completed Updated Successfully")
    }


    return (
        <>
            {/* Table Row */}
            <TableRow
                key={task.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="center">{task.title}</TableCell>
                <TableCell align="center">{task.description}</TableCell>
                <TableCell align="center">
                    <Checkbox color="success" checked={task.completed}
                        onChange={() => checkCompleteTask(task.id)}
                    />
                </TableCell>
                <TableCell align="center" style={{ maxWidth: 150 }}>
                    {task.tags.length > 0 ?
                        task.tags.map((tag, i) => < Chip key={`tag${i}`} label={tag} />)
                        :
                        <></>
                    }
                </TableCell>
                <TableCell align="center">
                    <IconButton
                        onClick={() => handleClickOpen(task.id)}
                    >
                        <DeleteIcon style={{ color: 'white' }} />
                    </IconButton>

                    <EditIcon style={{ color: 'white' }} />
                </TableCell>
            </TableRow >
            {/* Delete Alert */}
            <DeleteAlert open={openDeleteAlert} setOpen={setOpenDeleteAlert} selectedId={selectedId} />
        </>
    )
}