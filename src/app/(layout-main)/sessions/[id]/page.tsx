'use client'
import { useState, useEffect } from "react"
import {
    Box,
    Button,
    Heading,
    Table,
    Link,
    Text,
    ScrollArea,
    Grid,
    Flex
} from "@radix-ui/themes"
import {
    ArrowRightIcon,
    ArrowLeftIcon,
    ResetIcon
} from "@radix-ui/react-icons"
import {
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    Legend
} from "recharts"

import css from './index.module.scss'
import { data } from './data'


export default function SessionDetailPage() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return <>
        <Flex
            mb='4'
            gap='2'
            justify='between'
            wrap='wrap'
        >
            <Link href="/sessions/">
                <Button
                    size='1'
                    variant="soft"
                >
                    <ResetIcon/>
                    Back to sessions
                </Button>
            </Link>
            <Flex gap='2'>
                <Button
                    variant="surface"
                    size='1'
                >
                    <ArrowLeftIcon />
                    Previous
                </Button>
                <Button
                    variant="surface"
                    size='1'
                    disabled
                >
                    Next
                    <ArrowRightIcon />
                </Button>
            </Flex>
        </Flex>
        <Box mb='5'>
            <Heading size='8'>Session #12</Heading>
            <Text
                as="p"
                color="gray"
            >
                Ursas Planet #12
            </Text>
        </Box>
        <Box>
            <Grid
                className={css.grid}
                columns={{
                    sm: '2'
                }} gap='5'
            >
                <ScrollArea scrollbars="horizontal">
                    {
                        isClient &&
                        <>
                            <Box
                                my='5'
                                className={css.chartWrapper}
                            >
                                <LineChart
                                    width={400}
                                    height={150}
                                    data={data}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    <Legend content={<center>Work load chart</center>} />
                                </LineChart>
                            </Box>
                            <Box
                                my='5'
                                className={css.chartWrapper}
                            >
                                <LineChart
                                    width={400}
                                    height={150}
                                    data={data}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    <Legend content={<center>Signal chart</center>} />
                                </LineChart>
                            </Box>
                        </>
                    }
                </ScrollArea>
                <Box ml={{
                    sm: '5'
                }}>
                    <Table.Root variant="surface">
                        <Table.Body>
                            <Table.Row>
                                <Table.RowHeaderCell>Date created</Table.RowHeaderCell>
                                <Table.Cell align="right">2 July, 2023 <Text color="gray">(5 days ago)</Text></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.RowHeaderCell>Session duration</Table.RowHeaderCell>
                                <Table.Cell align="right">3 hours</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.RowHeaderCell>Work duration</Table.RowHeaderCell>
                                <Table.Cell align="right"><Text color="green">3 hours</Text></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.RowHeaderCell>Breaks duration</Table.RowHeaderCell>
                                <Table.Cell align="right"><Text color="red">3 hours</Text></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.RowHeaderCell>Total workload</Table.RowHeaderCell>
                                <Table.Cell align="right">
                                    <Text color="green">72%</Text>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.RowHeaderCell>Signals count</Table.RowHeaderCell>
                                <Table.Cell align="right">5</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.RowHeaderCell>Breaks count</Table.RowHeaderCell>
                                <Table.Cell align="right">5</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Box>
            </Grid>
        </Box>
    </>
}