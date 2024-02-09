import { memo } from "react"

import { columns, sessions } from './fixtures'

import Pagination from "@/components/Pagination"
import Table from "@/components/Table"


export function TableProjects() {
    return <>
        <Table
            columns={columns}
            objects={sessions}
        />
        <Pagination />
    </>
}


export default memo(TableProjects)