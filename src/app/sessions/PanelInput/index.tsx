"use client"
import { memo, useState } from "react"
import {
    Flex,
    TextField,
    IconButton
} from "@radix-ui/themes"
import {
    ChatBubbleIcon,
    PaperPlaneIcon,
    PauseIcon,
    PlayIcon
} from "@radix-ui/react-icons"

import css from "./index.module.scss"


export function PanelInput() {
    const [isPaused, setIsPaused] = useState(false)

    return <Flex p="3" gap="2" className={css.panelInput}>
        <TextField.Root size="3" className={css.panelInputField}>
            <TextField.Slot>
                <ChatBubbleIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
                placeholder="Signal…"
                disabled={isPaused}
            />
        </TextField.Root>
        <IconButton
            size="3"
            onClick={ () => setIsPaused(!isPaused) }
            variant='classic'
            color={ isPaused ? "green" : "gray"}
        >
            {
                isPaused ? <PlayIcon /> : <PauseIcon/>
            }
        </IconButton>
        <IconButton
            size="3"
            disabled={isPaused}
        >
            <PaperPlaneIcon />
        </IconButton>
    </Flex>
}

export default memo(PanelInput)