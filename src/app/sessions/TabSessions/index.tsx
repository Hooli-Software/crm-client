import { memo } from "react"

import {
    Box,
    Tabs,
} from "@radix-ui/themes"

import TableSessions from './Table'


function TabSessions() {
    return <Tabs.Content value="sessions">
        <Box my='4'>
            <TableSessions/>
        </Box>
    </Tabs.Content>
}


export default memo(TabSessions)