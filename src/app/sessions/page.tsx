"use client"
import { useRef, useEffect, useState } from "react"
import {
    AlertDialog,
    Box,
    IconButton,
    ScrollArea,
} from "@radix-ui/themes"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import css from "./page.module.scss"
import Brief from './Brief'
import Signal from './Signal'
import PanelInput from './PanelInput'
import DialogEndSession from "@/app/sessions/DialogEndSession"


export default function SessionFeedPage() {
    const feedSignals = useRef<HTMLDivElement>(null)
    const [isBriefActive, setIsBriefActive] = useState(false)

    useEffect(() => {
        feedSignals.current?.scrollTo(0, feedSignals.current.scrollHeight)
    }, [])

    return <>
        <Box className={css.wrapper}>
            <Box className={css.container}>
                <Box className={[css.brief, isBriefActive && css.briefActive].join(' ')} p='3' my='5'>
                    <Brief/>
                </Box>
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
                    <PanelInput/>
                </Box>
            </Box>
        </Box>
        <IconButton
            onClick={ () => setIsBriefActive(!isBriefActive) }
            className={css.buttonBriefTablet}
            variant="soft"
            color="gray"
        >
            <ChevronDownIcon height={24} width={24}/>
        </IconButton>
    </> 
}