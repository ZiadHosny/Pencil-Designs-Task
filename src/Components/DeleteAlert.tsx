import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../store/hooks';
import { tasksActions } from '../store/slices/tasksSlice';

type DeleteAlertType = {
    open: boolean,
    selectedId: string,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const DeleteAlert = ({ open, setOpen, selectedId }: DeleteAlertType) => {
    const dispatch = useAppDispatch()

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        dispatch(tasksActions.removeTask(selectedId));
        toast.success("Task Deleted Successfully");
        handleClose()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are You Sure to Delete this Task?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Delete task with id : {selectedId}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>cancel</Button>
                <Button onClick={handleDelete} autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}
