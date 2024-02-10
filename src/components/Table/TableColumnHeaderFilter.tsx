import {
    memo,
} from "react"

import {
    Select,
    Table,
} from "@radix-ui/themes"

import { IColumn } from "./index"


function TableColumnHeaderFilter(props: IColumn<any>) {
    return <Table.ColumnHeaderCell align={props.align}>
        {
            props.filterObjects?.length ?
                <Select.Root
                    defaultValue={props.filterObjects[0].value}
                    onValueChange={
                        (value) =>
                            props.filterCallback?.(value)
                    }
                >
                    <Select.Trigger variant="ghost"/>
                    <Select.Content>
                        {
                            props.filterObjects.map((object, index)=>
                                <Select.Item key={index} value={object.value}>{object.title}</Select.Item>
                            )
                        }
                    </Select.Content>
                </Select.Root>
            :
                props.title
        }
    </Table.ColumnHeaderCell>
}


export default memo(TableColumnHeaderFilter)