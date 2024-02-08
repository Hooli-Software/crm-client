import { memo } from "react"

import {
    Select,
    Table,
} from "@radix-ui/themes"

import { IColumn } from "./index"


function TableColumnHeaderCell(props: IColumn<any>) {
    return <Table.ColumnHeaderCell align={props.align}>
        {
            props.filtered ?
                <Select.Root defaultValue="all">
                    <Select.Trigger variant="ghost"/>
                    <Select.Content>
                    <Select.Item value="all">Project</Select.Item>
                        <Select.Item value="5">Ursas Planet</Select.Item>
                        <Select.Item value="1">Kleewish</Select.Item>
                        <Select.Item value="2">HooliCRM</Select.Item>
                        <Select.Item value="3">HooliCRM</Select.Item>
                        <Select.Item value="3" disabled>Saleor</Select.Item>
                    </Select.Content>
                </Select.Root>
                :
                props.title
        }
    </Table.ColumnHeaderCell>
}


export default memo(TableColumnHeaderCell)