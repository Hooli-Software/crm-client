import { Link } from "@radix-ui/themes"
import moment from "moment"
import { Text } from "@radix-ui/themes"

import { IColumn } from "@/components/Table"


interface IOrder
{
    id: number
    title: string
    project: string
    hours: number
    price: number
    created: string
    status?: 'active' | 'canceled' | 'done'
}


const columns: IColumn<IOrder>[] = [
    {
        title: 'Title',
        value: 'title',
        formatFunc: (object: IOrder) => 
            <Link
                href={`#`}
            >
                {object.title}
            </Link>
    },
    {
        title: 'Project',
        value: 'project',
        formatFunc: (object: IOrder) => 
            <Link
                href={`#`}
            >
                {object.project}
            </Link>
    },
    {
        title: 'Status',
        value: 'status',
        formatFunc: (object: IOrder) => 
            <Text
                color={
                    object.status === 'active' ? 'blue' :
                    object.status === 'canceled' ? 'red' :
                    'green'
                }
            >
                {object.status}
            </Text>
    },
    {
        title: 'Hours',
        value: 'hours',
    },
    {
        title: 'Price',
        value: 'price',
        formatFunc: (object: IOrder) => <Text color="green">{object.price} $</Text>
    },
    {
        title: 'Ordered',
        value: 'created',
        align: 'right'
    },
]

const sessions: IOrder[] = [
    {
        id: 1,
        title: 'Client - Sprint 3',
        project: 'Ursas Game',
        hours: 30,
        price: 350,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow(),
        status: 'active'
    },
    {
        id: 1,
        title: 'Client - Sprint 2',
        project: 'Ursas Game',
        hours: 30,
        price: 350,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow(),
        status: 'canceled'
    },
    {
        id: 1,
        title: 'Client - Sprint 1',
        project: 'Ursas Game',
        hours: 30,
        price: 350,
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow(),
        status: 'done'
    }
]


export {
    columns,
    sessions
}