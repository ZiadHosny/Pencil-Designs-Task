import { createSlice } from "@reduxjs/toolkit"
import { ModalType } from "../../utils/types"

const initialState: ModalType = {
    open: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, { payload }: { payload: ModalType }) => {
            const { open, createOrUpdate, task } = payload

            state.open = open
            state.createOrUpdate = createOrUpdate
            state.task = task
        }
    }
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer