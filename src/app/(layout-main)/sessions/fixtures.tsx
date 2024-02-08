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
        formatFunc: (session: ISession) => 
            <Link
                href={
                    session.active ?
                        `sessions/feed/${session.id}/`
                    :
                        `sessions/${session.id}/`
                }
            >
                {
                    session.active ?
                        <Button
                            variant="soft"
                            color="green"
                        >
                            #{session.id}
                            <PlayIcon/>
                        </Button>
                        :
                        <>
                            #{session.id}
                        </>
                }
            </Link>
    },
    {
        title: 'Order',
        value: 'order',
        filtered: true
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