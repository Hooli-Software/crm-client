import { memo } from "react"
import {
    Box,
    Flex,
    Text
} from "@radix-ui/themes"
import { PauseIcon, PaperPlaneIcon, HandIcon, RocketIcon } from "@radix-ui/react-icons"

import css from './index.module.scss'


export type SignalType = 'start'| 'finish' | 'regular' | 'break'

export interface ISignal {
    content: string
    time: string
    type: SignalType
}


function Signal(props: ISignal) {
    return <Flex m='3' mb='5' align='center' gap='4'>
        <Box>
            {
                props.type === 'start' &&
                    <RocketIcon className={css.iconType} />
            }
            {
                props.type === 'finish' &&
                    <HandIcon className={css.iconType} />
            }
            {
                props.type === 'regular' &&
                    <PaperPlaneIcon className={css.iconType} />
            }
            {
                props.type === 'break' &&
                    <PauseIcon className={css.iconType} />
            }
        </Box>
        <Box>
            <Text as="p" mb='1' color="gray">
                {props.time}
            </Text>
            {
                props.type === 'start' &&
                <Text color="green">
                    Session started - &nbsp;
                </Text>
            }
            {
                props.type === 'finish' &&
                <Text color="green">
                    Session ended - &nbsp;
                </Text>
            }
            {
                props.type === 'break' &&
                <Text color="green">
                    Break - &nbsp;
                </Text>
            }
            <Text>
                {props.content}
            </Text>
        </Box>
    </Flex>
}


export default memo(Signal)