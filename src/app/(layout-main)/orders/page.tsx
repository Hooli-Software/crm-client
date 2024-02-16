'use client'
import {
    Box,
    Flex,
    Button
} from '@radix-ui/themes'
import { PlusIcon } from '@radix-ui/react-icons'

import Table from './Table'


export default function TransactionsPage() {
    return <>
        <Flex justify='between' mb='5' gap='3'>
            <Box></Box>
            <Button>
                <PlusIcon />
                Add order
            </Button>
        </Flex>
        <Table/>
    </>
}
