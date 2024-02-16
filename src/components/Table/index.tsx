import { memo } from "react";

import { Table } from "@radix-ui/themes";

import TableColumnHeader from "./TableColumnHeader"; 
import TableColumnHeaderFilter from "./TableColumnHeaderFilter"; 
import TableColumnHeaderSort from "./TableColumnHeaderSort"; 

import css from './index.module.scss'


interface ITable {
    columns: IColumn<any>[]
    objects: any[]
}


export type SortValue = 'asc' | 'desc' | null

export type IColumn<IModel> = {
    title: string,
    value: keyof IModel,
    formatFunc?: (_: any) => any
    filterObjects?: IFilterObject[]
    filterCallback?: CallableFunction
    filterValue?: string,
    sorted?: boolean
    sortCallback?: (_: SortValue) => void
    align?: 'left' | 'right' | 'center'
}

export type IFilterObject = {
    title: string
    value: string
}


function TableCustom(props: ITable) {
    return <Table.Root mb='4' variant="surface" className={css.table}>
        <Table.Header>
            <Table.Row>
                {
                    props.columns.map((column, index) =>
                        column.filterObjects ?
                            <TableColumnHeaderFilter key={index} {...column} />
                        :
                        column.sorted ?
                            <TableColumnHeaderSort key={index} {...column} />
                        :
                            <TableColumnHeader key={index} {...column} />
                    )
                }
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                props.objects.map((object, index) =>
                    <Table.Row key={index}>
                        {
                            props.columns.map((column, index) =>
                                <Table.Cell key={index} align={column.align}>
                                    {
                                        column.formatFunc ?
                                            column.formatFunc(object) :
                                            object[column.value]
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