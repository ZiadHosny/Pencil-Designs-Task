import { useState, forwardRef, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Box,
    Checkbox,
    FormControlLabel,
    IconButton,
    TextField,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { setModal } from '../store/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const CreateTask = () => {
    const modal = useAppSelector(state => state.modal)

    const dispatch = useAppDispatch()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [tags, setTags] = useState<string>('')
    const [completed, setCompleted] = useState<boolean>(false)

    const handleClose = () => {
        resetFrom()
    };

    const resetFrom = () => {
        dispatch(setModal({ open: false }))
        setCompleted(false)
        setTitle('')
        setDescription('')
        setTags('')
    }

    useEffect(() => {
        if (modal.createOrUpdate === 'update' && modal.task) {
            const { completed, title, description, tags } = modal.task
            setCompleted(completed)
            setTitle(title)
            setDescription(description)
            setTags(tags.join(','))
        }
    }, [modal])

    return (
        <Dialog
            open={modal.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>
                <Typography>
                    {modal.createOrUpdate === 'create' ? "Create New Task" : "Update Task"}
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box >
                    <TextField
                        fullWidth
                        type="text"
                        label="Enter Title"
                        variant="outlined"
                        style={{ margin: '20px 0' }}
                        required
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <TextField
                        fullWidth
                        type="text"
                        label="Enter Task Description"
                        variant="outlined"
                        style={{ marginBottom: 20 }}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                    <TextField
                        fullWidth
                        type="text"
                        label="Enter Tags Separated with commas"
                        variant="outlined"
                        style={{ marginBottom: 20 }}
                        value={tags}
                        onChange={(e) => { setTags(e.target.value) }}
                    />
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {modal.createOrUpdate === 'create' ?
                            <></>
                            :
                            <FormControlLabel label="Completed"
                                control={
                                    <Checkbox color="success"
                                        checked={completed}
                                        onChange={(_, checked) => { setCompleted(checked) }}
                                    />
                                }
                            />
                        }

                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                {modal.createOrUpdate === 'create' ?
                    <Button type='submit'>Create</Button> :
                    <Button type='submit'>Update</Button>
                }
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog >
    );
}
