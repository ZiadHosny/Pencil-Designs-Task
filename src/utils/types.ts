export type Task = {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    tags: string[],
}

export type ModalType = {
    createOrUpdate?: 'create' | 'update',
    open: boolean,
    task?: Task,
}