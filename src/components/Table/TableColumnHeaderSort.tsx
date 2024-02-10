import {
    memo,
} from "react"
import {
    useRouter,
    usePathname,
    useSearchParams
} from "next/navigation"

import {
    Table,
    Button
} from "@radix-ui/themes"
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"

import { IColumn, SortValue } from "./index"


const getSwitchedState = (value: SortValue): SortValue => {
    switch (value) {
        case 'asc':
            return 'desc'
        case 'desc':
            return null
        case null:
            return 'asc'
    }
}


function TableColumnHeaderCell(props: IColumn<any>) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleClick = () => {
        const query = new URLSearchParams(searchParams)

        if (getSwitchedState(getValue())) {
            query.set('sort', `${getSwitchedState(getValue())}(${props.value.toString()})`)
        } else {
            query.delete('sort')
        }

        router.replace(`${pathname}?${query.toString()}`)
    }

    const getValue = (): SortValue => {
        if (!searchParams.get('sort')?.match(`^(desc|asc)\\(${props.value.toString()}\\)$`)) { return null }
        if (searchParams.get('sort')?.includes('desc')) { return 'desc' }
        if (searchParams.get('sort')?.includes('asc')) { return 'asc' }
        return null
    }

    return <>
        <Table.ColumnHeaderCell align={props.align}>
            <Button
                variant="ghost"
                onClick={() => handleClick()}
            >
                {
                    getValue() === 'asc' &&
                    <ArrowDownIcon />
                }
                {
                    getValue() === 'desc' &&
                    <ArrowUpIcon />
                }
                {props.title}
            </Button>
            {
                !getValue() && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
            }
        </Table.ColumnHeaderCell>
    </>
}


export default memo(TableColumnHeaderCell)