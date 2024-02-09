import { memo } from "react"


import { columns, sessions } from './fixtures'

import Pagination from "@/components/Pagination"
import Table from "@/components/Table"


export function TableObjects() {
    return <>
        <Table
            columns={columns}
            objects={sessions}
        />
        <Pagination />
    </>
}


export default memo(TableObjects)