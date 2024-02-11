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
            </Link>,
        filterObjects: [
            {
                title: 'Ursas Planet',
                value: '1'
            },
            {
                title: 'Kleewish',
                value: '2'
            },
            {
                title: 'Saleor',
                value: '3'
            }
        ]
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
            </Text>,
        filterObjects: [
            {
                title: 'status',
                value: '1'
            },
            {
                title: 'active',
                value: 'active'
            },
            {
                title: 'canceled',
                value: 'canceled'
            },
            {
                title: 'done',
                value: 'done'
            }
        ]
    },
    {
        title: 'Hours',
        value: 'hours',
        sorted: true
    },
    {
        title: 'Price',
        value: 'price',
        formatFunc: (object: IOrder) => <Text color="green">{object.price} $</Text>,
        sorted: true
    },
    {
        title: 'Ordered',
        value: 'created',
        align: 'right',
        sorted: true
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