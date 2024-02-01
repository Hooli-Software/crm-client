"use client"
import { useRef, useEffect } from "react"
import {
    Box,
    IconButton,
    Flex,
    ScrollArea,
    TextField,
} from "@radix-ui/themes"
import { ChatBubbleIcon, PaperPlaneIcon } from "@radix-ui/react-icons"

import css from "./page.module.scss"
import Signal from './Signal'


export default function SessionFeedPage() {
    const feedSignals = useRef<HTMLDivElement>(null)

    useEffect(() => {
        feedSignals.current?.scrollTo(0, feedSignals.current.scrollHeight)
    }, [])

    return <Box className={css.wrapper}>
        <Box className={css.container}>
            <Box className={css.feed} py='3'>
                <ScrollArea mt='3' ref={feedSignals} scrollbars="vertical" size='1' className={css.feedSignals}>
                    <Box pr='3'>
                        <Signal
                            time='10:00'
                            type='start'
                            content='Надеюсь всё хорошо пройдёт!'
                        />
                        {
                            Array.from(Array(9)).map((_, index) =>
                                <Signal
                                    key={index}
                                    time='10:00'
                                    type='regular'
                                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus dolorum possimus ullam assumenda veniam cumque recusandae nesciunt? Assumenda ratione, nisi temporibus aliquam esse similique natus praesentium repellat veritatis rem.'
                                />
                            )
                        }
                        <Signal
                            time='10:00-12:00'
                            type='break'
                            content='Пойду посмотрю в потолок и вернусь!'
                        />
                        <Signal
                            time='10:00'
                            type='finish'
                            content='Славный был день. Хорошо поработал!'
                        />
                    </Box>
                </ScrollArea>
                <Flex p="3" gap='2' className={css.panelInput}>
                    <TextField.Root className={css.panelInputField}>
                        <TextField.Slot>
                            <ChatBubbleIcon height="16" width="16" />
                        </TextField.Slot>
                        <TextField.Input placeholder="Signal…" />
                    </TextField.Root>
                    <IconButton>
                        <PaperPlaneIcon />
                    </IconButton>
                </Flex>
            </Box>
        </Box>
    </Box>
}