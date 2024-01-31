"use client"
import {
    Box,
    Card,
    ScrollArea,
    TextArea,
    Text
} from "@radix-ui/themes"

import css from "./page.module.scss"


export default function SessionFeedPage() {
    return <Box className={css.wrapper}>
        <Box className={css.container}>
            <Box className={css.feed} py='3'>
                <ScrollArea scrollbars="vertical" className={css.feedSignals}>
                    <Box mx='3'>
                        <Text>
                            Session started at 12:02pm
                        </Text>
                    </Box>
                    {
                        Array.from(Array(9)).map((_, index)=>
                                <Card key={index} mx="3" mt="3">
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum dolorem, iure suscipit tempora.</Text>
                                </Card>
                            )
                    }
                </ScrollArea>
                <Box p="3">
                    <TextArea placeholder="Reply to comment…" />
                </Box>
            </Box>
        </Box>
    </Box> 
}