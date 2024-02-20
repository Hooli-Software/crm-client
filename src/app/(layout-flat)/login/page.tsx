'use client'
import {
    Box,
    Button,
    Card,
    Flex,
    Kbd,
    TextField,
    Text,
    Link
} from '@radix-ui/themes'

import css from './index.module.scss'


export default function LoginPage() {

    return <Box className={css.wrapper} p='3' py='9'>
        <Text as='p' mb='3'>If user logged in before:</Text>
        <Card mb='5'>
            <Box p='3'>
                <Flex direction='column' gap='4'>
                    <Text>Hello, <Kbd>lama</Kbd> please enter your password.</Text>
                    <TextField.Input
                        size='3'
                        type='password'
                        placeholder="Enter your password"
                    />
                    <Button
                        variant='classic'
                        color='green'
                        size='3'
                    >
                        Submit
                    </Button>
                    <Link>That&apos;s not me!</Link>
                </Flex>
            </Box>
        </Card>
        <Text as='p' mb='3'>If user is new:</Text>
        <Card>
            <Box p='3'>
                <Flex direction='column' gap='4'>
                    <TextField.Input
                        size='3'
                        placeholder="Enter your username"
                    />
                    <TextField.Input
                        size='3'
                        type='password'
                        placeholder="Enter your password"
                    />
                    <Button
                        variant='classic'
                        color='green'
                        size='3'
                    >
                        Submit
                    </Button>
                </Flex>
            </Box>
        </Card>
    </Box>
}