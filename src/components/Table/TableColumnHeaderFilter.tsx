import {
    memo,
} from "react"
import {
    useRouter,
    usePathname,
    useSearchParams
} from "next/navigation"

import {
    Select,
    Table,
} from "@radix-ui/themes"

import { IColumn } from "./index"


function TableColumnHeaderFilter(props: IColumn<any>) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleSelect = (value: string) => {
        const query = new URLSearchParams(searchParams)
        query.set(props.filterValue || String(props.value), value)
        router.replace(`${pathname}?${query.toString()}`)
    }

    return <Table.ColumnHeaderCell align={props.align}>
        {
            props.filterObjects?.length ?
                <Select.Root
                    defaultValue={searchParams.get(props.filterValue || String(props.value)) || props.filterObjects[0].value}
                    onValueChange={
                        (value) => {
                            props.filterCallback?.(value)
                            handleSelect(value)
                        }
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