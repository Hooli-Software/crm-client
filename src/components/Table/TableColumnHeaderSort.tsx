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


function TableColumnHeaderCell(props: IColumn<any>) {

    return <Table.ColumnHeaderCell align={props.align}>
        {
            props.sorted ?
                <ButtonSort value={props.value}  callback={props.sortCallback}>{props.title}</ButtonSort>
            :
                props.title
        }
    </Table.ColumnHeaderCell>
}


function ButtonSort(    
    props: {
        children: React.ReactNode,
        callback?: CallableFunction,
        value: any
    }
) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const getSwitchedState = (value: SortValue): SortValue => {
        switch(value) {
            case 'asc':
                return 'desc'
            case 'desc':
                return null
            case null:
                return 'asc'
        }
    }

    const handleClick = () => {
        const query = new URLSearchParams(searchParams)

        if (getSwitchedState(getValue())) {
            query.set('sort', `${getSwitchedState(getValue())}(${props.value})`)
        } else {
            query.delete('sort')
        }

        router.replace(`${pathname}?${query.toString()}`)
    }

    const getValue = (): SortValue => {
        if (!searchParams.get('sort')?.match(`^(desc|asc)\\(${props.value}\\)$`)) { return null }
        if (searchParams.get('sort')?.includes('desc')) { return 'desc' }
        if (searchParams.get('sort')?.includes('asc')) { return 'asc' }
        return null
    }

    return <Button
        variant="ghost"
        onClick={ () => handleClick() }
    >
        {
            getValue() === 'asc' &&
                <ArrowDownIcon/>
        }
        {
            getValue() === 'desc' &&
                <ArrowUpIcon/>
        }
        {props.children}
    </Button>
}


export default memo(TableColumnHeaderCell)