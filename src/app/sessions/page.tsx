'use client'
import {
    Box,
    Container,
    Tabs,
    Text,
    Quote
} from "@radix-ui/themes";

import {soonPages} from './soon'
import TabSessions from "./TabSessions";


export default function SessionListPage() {
    return <Container p='3' py='5' size='3'>
        <Tabs.Root defaultValue="account">
            <Tabs.List>
                <Tabs.Trigger value="sessions">Sessions</Tabs.Trigger>
                {
                    soonPages.map(page =>
                        <Tabs.Trigger
                            key={page.value}
                            value={page.value}
                        >
                            {page.title}
                        </Tabs.Trigger>
                    )
                }
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                {
                    soonPages.map(page =>
                        <Tabs.Content
                            key={page.value}
                            value={page.value}
                        >
                            <Text size="2">Coming soon... (<Quote>{page.title}</Quote>)</Text>
                        </Tabs.Content> 
                    )
                }

                <TabSessions/>
            </Box>
        </Tabs.Root>
    </Container>
}