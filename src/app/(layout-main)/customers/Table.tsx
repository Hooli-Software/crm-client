import { memo } from "react"

import { columns, sessions } from './fixtures'

import Pagination from "@/components/Pagination"
import Table from "@/components/Table"


export function TableCustomers() {
    return <>
        <Table
            columns={columns}
            objects={sessions}
        />
        <Pagination />
    </>
}


export default memo(TableCustomers)