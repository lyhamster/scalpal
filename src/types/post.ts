export type Post = {
    id: number, 
    title: string,
    body: string,
    tags?: string[],
    userId: number,
    name: string,
}