import { Link } from "@radix-ui/themes"


interface ISession
{
    id: number
    order: string
    created: string
}

interface IColumn {
    title: string,
    value: keyof ISession,
    formatFunc?: (_: any) => any
    align?: 'left'|'right'|'center'
}


const columns: IColumn[] = [
    {
        title: 'ID',
        value: 'id',
        formatFunc: (val) => <Link href={`sessions/${val}/`}>#{val}</Link>
    },
    {
        title: 'Order',
        value: 'order'
    },
    {
        title: 'Created',
        value: 'created',
        align: 'right'
    },
]

const sessions: ISession[] = [
    {
        id: 357,
        order: 'Ursas Planet #123',
        created: '1 day ago'
    },
    {
        id: 346,
        order: 'Kleewish #12',
        created: '2 days ago'
    },
    {
        id: 341,
        order: 'HooliCRM #922',
        created: '2 days ago'
    },
]


export {
    columns,
    sessions
}