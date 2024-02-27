export type Status = 'question' | 'answer'

export interface Data {
    id: number
    content: string
    status: Status
}