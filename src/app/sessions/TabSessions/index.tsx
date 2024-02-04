import { memo } from "react"

import {
    Tabs,
    Text,
} from "@radix-ui/themes"


function TabSessions() {
    return <Tabs.Content value="sessions">
        <Text size="2">Session table will be here...</Text>
    </Tabs.Content>
}


export default memo(TabSessions)