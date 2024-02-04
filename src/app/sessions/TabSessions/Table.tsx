import { memo } from "react"

import {
    Table
} from "@radix-ui/themes"

import {columns, sessions} from './fixtures'


export function TableSessions() {
    return <Table.Root variant="surface">
        <Table.Header>
            <Table.Row>
                {
                    columns.map(column=>
                        <Table.ColumnHeaderCell key={column.value} align={column.align}>
                            {column.title}
                        </Table.ColumnHeaderCell>                    
                    )
                }
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                sessions.map(session=>
                    <Table.Row key={session.id}>
                        {
                            columns.map(column=>
                                <Table.Cell key={column.value} align={column.align}>
                                    {
                                        column.formatFunc ?
                                            column.formatFunc(session[column.value]) :
                                            session[column.value]
                                    }
                                </Table.Cell>
                            )
                        }
                    </Table.Row>
                )
            }
        </Table.Body>
    </Table.Root>
}


export default memo(TableSessions)