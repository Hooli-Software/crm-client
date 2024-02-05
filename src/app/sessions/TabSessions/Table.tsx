import { memo } from "react"

import {
    Table
} from "@radix-ui/themes"

import {columns, sessions} from './fixtures'
import TableColumnHeaderCell from "./TableColumnHeaderCell"
import TablePagination from "./TablePagination"


export function TableSessions() {
    return <>
        <Table.Root mb='4' variant="surface">
            <Table.Header>
                <Table.Row>
                    {
                        columns.map(column=>
                            <TableColumnHeaderCell key={column.value} {...column}/>
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
                                                column.formatFunc(session) :
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
        <TablePagination/>
    </>
}


export default memo(TableSessions)