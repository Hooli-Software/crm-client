'use client'
import {
    Box,
    Button,
    Flex
} from '@radix-ui/themes'
import { PlusIcon } from '@radix-ui/react-icons'

import Table from './Table'


export default function TransactionsPage() {
    return <>
        <Flex justify='between' mb='5' gap='3'>
            <Box></Box>
            <Button>
                <PlusIcon />
                Add project
            </Button>
        </Flex>
        <Table />
    </>
}
