export type Status = 'first' | 'second'

export interface Data {
    id: number
    content: string
    status: Status
}