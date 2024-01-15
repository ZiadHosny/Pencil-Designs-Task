import {
    Checkbox,
    Chip,
    TableRow,
    TableCell,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Task } from '../utils/types';


export const TaskRow = ({ task }: { task: Task }) => {

    return (
        <TableRow
            key={task.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell align="center">{task.title}</TableCell>
            <TableCell align="center">{task.description}</TableCell>
            <TableCell align="center">
                <Checkbox color="success" checked={task.completed} />
            </TableCell>
            <TableCell align="center" style={{ maxWidth: 150 }}>
                {task.tags.length > 0 ?
                    task.tags.map((tag, i) => < Chip key={`tag${i}`} label={tag} />)
                    :
                    <></>
                }
            </TableCell>
            <TableCell align="center">

                <DeleteIcon style={{ color: 'white' }} />

                <EditIcon style={{ color: 'white' }} />
            </TableCell>
        </TableRow >
    )
}