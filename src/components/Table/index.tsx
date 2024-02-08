import { memo } from "react";

import { Table } from "@radix-ui/themes";

import TableColumnHeaderCell from "./TableColumnHeaderCell"; 


interface ITable {
    columns: IColumn<any>[]
    objects: any[]
}


export type IColumn<IModel> = {
    title: string,
    value: keyof IModel,
    formatFunc?: (_: any) => any
    filtered?: boolean
    align?: 'left' | 'right' | 'center'
}


function TableCustom(props: ITable) {
    return <Table.Root mb='4' variant="surface">
        <Table.Header>
            <Table.Row>
                {
                    props.columns.map((column, index) =>
                        <TableColumnHeaderCell key={index} {...column} />
                    )
                }
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                props.objects.map(session =>
                    <Table.Row key={session.id}>
                        {
                            props.columns.map((column, index) =>
                                <Table.Cell key={index} align={column.align}>
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
}


export default memo(TableCustom)