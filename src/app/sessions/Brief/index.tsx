import { memo } from "react"
import {
    Box,
    Button,
    Card,
    Table,
    Text
} from "@radix-ui/themes"
import * as Progress from '@radix-ui/react-progress'
import {
    LapTimerIcon,
    HandIcon
} from "@radix-ui/react-icons"

import css from './index.module.scss'


export function Brief() {
    return <>
        <Card mb='5'>
            <Box p='3'>
                <Text align='center' size='7' as="p" mb='5'>
                    <LapTimerIcon fontSize='32' />
                    &nbsp;
                    11 : 00 : 00
                </Text>
                <Table.Root mb='5'>
                    <Table.Body>
                        <Table.Row>
                            <Table.RowHeaderCell>Order</Table.RowHeaderCell>
                            <Table.Cell justify='end'>Ursas Planet #321</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.RowHeaderCell>Work</Table.RowHeaderCell>
                            <Table.Cell justify='end'>
                                12 : 00
                                &nbsp;
                                <LapTimerIcon/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.RowHeaderCell>Pause</Table.RowHeaderCell>
                            <Table.Cell justify='end'>
                                12 : 00
                                &nbsp;
                                <LapTimerIcon/>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
                <Text as='p' align='center' mb='3'><Text color='gray'>Work load:</Text> 50%</Text>
                <Progress.Root className={css.progressRoot} value={50}>
                    <Progress.Indicator
                        className={css.progressIndicator}
                        style={{ transform: `translateX(-${50}%)` }}
                    />
                </Progress.Root>
            </Box>
        </Card>
        <Box px='3'>
            <Button
                size='3'
                variant="ghost"
                color="red"
                style={{width: '100%'}}
            >
                <HandIcon/>
                End session
            </Button>
        </Box>
    </>
}

export default memo(Brief)