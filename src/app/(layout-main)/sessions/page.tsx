'use client'

import {
    Button,
    Flex,
    Box
} from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

import Table from "./Table";


export default function SessionListPage() {
    return <>
        <Flex justify='between' mb='5' gap='3'>
            <Box></Box>
            <Button
                size='1'
                variant='soft'
            >
                <PlusIcon/>
                Start new session
            </Button>
        </Flex>
        <Table/>
    </>
}