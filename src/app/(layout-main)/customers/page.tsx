'use client'
import Link from 'next/link'
import {
    Flex,
    Box,
    Button,
} from '@radix-ui/themes'
import { PlusIcon } from '@radix-ui/react-icons'

import Table from './Table'


export default function TransactionsPage() {
    return <>
        <Flex justify='between' mb='5' gap='3'>
            <Box></Box>
            <Button
                size='1'
                variant='soft'
                asChild
            >
                <Link href='/customers/create/'>
                    <PlusIcon />
                    Add customer
                </Link>
            </Button>
        </Flex>
        <Table />
    </>
}
