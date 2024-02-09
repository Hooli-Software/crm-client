import { Link } from "@radix-ui/themes"
import moment from "moment"
import { Text } from "@radix-ui/themes"

import { IColumn } from "@/components/Table"


interface ICustomer
{
    id: number
    username: string
    count_orders_total: number
    count_cash_spent_total: number
    created: string
}


const columns: IColumn<ICustomer>[] = [
    {
        title: 'Username',
        value: 'username',
        formatFunc: (customer: ICustomer) => 
            <Link
                href={`#`}
            >
                {customer.username}
            </Link>
    },
    {
        title: 'Ordered times',
        value: 'count_orders_total',
    },
    {
        title: 'Cash spent',
        value: 'count_cash_spent_total',
        align: 'right',
        formatFunc: (customer: ICustomer) => <Text color="green">{customer.count_cash_spent_total} $</Text>
    },
    {
        title: 'Registered',
        value: 'created',
        align: 'right'
    },
]

const sessions: ICustomer[] = [
    {
        id: 1,
        username: 'urs',
        count_orders_total: 5,
        count_cash_spent_total: 2500,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 2,
        username: 'kleewish',
        count_orders_total: 10,
        count_cash_spent_total: 1000,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 2,
        username: 'saleor',
        count_orders_total: 2,
        count_cash_spent_total: 50,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
]


export {
    columns,
    sessions
}