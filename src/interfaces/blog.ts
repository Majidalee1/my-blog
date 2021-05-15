export interface IBlog {
    title: string,
    body: string,
    author: string,
    id: number
}

export interface IBlogListProps {
    [key: string]: IBlog
}