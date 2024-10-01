export interface RecordType {
    id: string | number,
    name: string
}
export interface ModalPropType {
    open: boolean,
    update: any,
    handleCancel: ()=> void
}
export interface Category {
    id?: string | number
    name: string
}