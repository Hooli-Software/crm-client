import { Link } from "@radix-ui/themes"
import moment from "moment"
import { Text } from "@radix-ui/themes"

import { IColumn } from "@/components/Table"


interface IOrder
{
    id: number
    order: string
    value: number
    currency: string
    created: string
}


const columns: IColumn<IOrder>[] = [
    {
        title: 'ID',
        value: 'id',
        formatFunc: (object: IOrder) => 
            <Link
                href={`#`}
            >
                # {object.id}
            </Link>
    },
    {
        title: 'Order',
        value: 'order',
        formatFunc: (object: IOrder) => 
            <Link
                href={`#`}
            >
                {object.order}
            </Link>
    },
    {
        title: 'Amount',
        value: 'value',
        formatFunc: (object: IOrder) => <Text color="green">{object.value} {object.currency}</Text>
    },
    {
        title: 'Created',
        value: 'created',
        align: 'right'
    },
]

const sessions: IOrder[] = [
    {
        id: 14,
        order: 'Ursas Planet > Client - Sprint 3',
        value: 100,
        currency: 'USDT',
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow(),
    },
    {
        id: 13,
        order: 'Ursas Planet > Client - Sprint 3',
        value: 100,
        currency: 'BUSD',
        created: moment("2024-02-01, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow(),
    },
    {
        id: 12,
        order: 'Ursas Planet > Client - Sprint 2',
        value: 4,
        currency: 'SOL',
        created: moment("2024-01-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow(),
    },
]


export {
    columns,
    sessions
}