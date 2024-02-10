import {memo} from "react"

import {Table} from "@radix-ui/themes"

import {IColumn} from "./index"


function TableColumnHeader(props: IColumn<any>) {
    return <Table.ColumnHeaderCell align={props.align}>
        {props.title}
    </Table.ColumnHeaderCell>
}


export default memo(TableColumnHeader)