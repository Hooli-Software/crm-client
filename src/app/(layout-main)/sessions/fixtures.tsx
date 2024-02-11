import { Link } from "@radix-ui/themes"
import moment from "moment"
import {
    Button
} from "@radix-ui/themes"
import {
    PlayIcon
} from "@radix-ui/react-icons"

import { IColumn } from "@/components/Table"


interface ISession
{
    id: number
    order: string
    created: string
    active?: boolean
}


const columns: IColumn<ISession>[] = [
    {
        title: 'ID',
        value: 'id',
        formatFunc: (object: ISession) => 
            <Link
                href={
                    object.active ?
                        `sessions/feed/${object.id}/`
                    :
                        `sessions/${object.id}/`
                }
            >
                {
                    object.active ?
                        <Button
                            variant="soft"
                            color="green"
                        >
                            #{object.id}
                            <PlayIcon/>
                        </Button>
                        :
                        <>
                            #{object.id}
                        </>
                }
            </Link>
    },
    {
        title: 'Order',
        value: 'order',
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
        title: 'Created',
        value: 'created',
        align: 'right',
        sorted: true,
    },
]

const sessions: ISession[] = [
    {
        id: 357,
        order: 'Ursas Planet #123',
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow(),
        active: true
    },
    {
        id: 346,
        order: 'Kleewish #12',
        created: moment("2024-02-05, 12:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 341,
        order: 'HooliCRM #922',
        created: moment("2024-02-05, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 331,
        order: 'Kleewish #11',
        created: moment("2024-02-04, 12:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    },
    {
        id: 320,
        order: 'HooliCRM #921',
        created: moment("2024-02-04, 17:00:00", "YYYY-MM-DD, h:mm:ss").fromNow()
    }
]


export {
    columns,
    sessions
}