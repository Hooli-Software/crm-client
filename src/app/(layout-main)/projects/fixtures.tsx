import { Link } from "@radix-ui/themes"
import moment from "moment"
import { Text } from "@radix-ui/themes"

import { IColumn } from "@/components/Table"


interface IProject
{
    id: number
    title: string
    owner: string
    count_orders_total: number
    count_cash_spent_total: number
    created: string
}


const columns: IColumn<IProject>[] = [
    {
        title: 'Title',
        value: 'title',
        formatFunc: (project: IProject) => 
            <Link
                href={`#`}
            >
                {project.title}
            </Link>
    },
    {
        title: 'Owner',
        value: 'owner',
    },
    {
        title: 'Orders count',
        value: 'count_orders_total',
    },
    {
        title: 'Cash spent',
        value: 'count_cash_spent_total',
        align: 'right',
        formatFunc: (customer: IProject) => <Text color="green">{customer.count_cash_spent_total} $</Text>
    },
    {
        title: 'Created',
        value: 'created',
        align: 'right'
    },
]

const sessions: IProject[] = [
    {
        id: 1,
        title: 'Ursas Planet',
        owner: 'urs',
        count_orders_total: 5,
        count_cash_spent_total: 900,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 2,
        title: 'Kleewish',
        owner: 'marlen',
        count_orders_total: 10,
        count_cash_spent_total: 1000,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 2,
        title: 'Saleor shop',
        owner: 'saleor',
        count_orders_total: 2,
        count_cash_spent_total: 50,
        created: moment("2023-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 1,
        title: 'Ursas Game',
        owner: 'urs',
        count_orders_total: 5,
        count_cash_spent_total: 1600,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    }
]


export {
    columns,
    sessions
}