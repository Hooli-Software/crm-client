'use client'
import {
    Avatar,
    Button,
    TextField,
    Heading,
    Grid,
    Section,
    Text,
    Box,
    Flex,
    IconButton,
    Switch,
    Select,
    TextArea
} from "@radix-ui/themes"
import {
    Pencil2Icon,
    Link2Icon
} from "@radix-ui/react-icons"
import {
    FaTelegram,
    FaDiscord,
    FaInstagram,
    FaSave,
    FaTwitter
} from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

import css from './page.module.scss'


export default function CustomerCreatePage() {
    return <>
        <Section size='2'>
            <Grid
                columns={{
                    xs: '2'
                }}
                gap='5'
            >
                <Flex justify='center' align='center' mb='7'>
                    <Box
                        className={css.wrapperAvatar}
                    >
                        <IconButton
                            variant="classic"
                            className={css.buttonAvatar}
                            radius="full"
                        >
                            <Pencil2Icon />
                        </IconButton>
                        <Avatar
                            size="9"
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                            fallback="HS"
                        />
                    </Box>
                </Flex>
                <Box>
                    <Flex direction='column' gap='3' mb='7'>
                        <Flex justify='between' align='center' mb='3'>
                            <Heading>General</Heading>
                            <Button><FaSave />Create</Button>
                        </Flex>
                        <Box>
                            <Text as="label">Full name</Text>
                            <TextField.Input />
                        </Box>
                        <Box>
                            <Text as="label">Username</Text>
                            <Box>
                                <TextField.Root>
                                    <TextField.Slot>
                                        @
                                    </TextField.Slot>
                                    <TextField.Input />
                                </TextField.Root>
                            </Box>
                        </Box>
                        <Box>
                            <Text as="label">Email</Text>
                            <TextField.Input />
                        </Box>
                        <Box>
                            <Text as="label">Phone number</Text>
                            <TextField.Root>
                                <TextField.Slot>
                                    +
                                </TextField.Slot>
                                <TextField.Input />
                            </TextField.Root>
                        </Box>

                    </Flex>
                </Box>
            </Grid>
            <Grid
                columns={{
                    xs: '2'
                }}
                gap='5'
            >
                <Flex direction='column' gap='4' mb='7'>
                    <Heading mb='3'>Socials</Heading>
                    <Box>
                        <TextField.Root>
                            <TextField.Slot>
                                <FaTelegram />
                            </TextField.Slot>
                            <TextField.Input placeholder="Telegram link" />
                        </TextField.Root>
                    </Box>
                    <Box>
                        <TextField.Root>
                            <TextField.Slot>
                                <FaTwitter />
                            </TextField.Slot>
                            <TextField.Input placeholder="Twitter link" />
                        </TextField.Root>
                    </Box>
                    <Box>
                        <TextField.Root>
                            <TextField.Slot>
                                <FaDiscord />
                            </TextField.Slot>
                            <TextField.Input placeholder="Discord link" />
                        </TextField.Root>
                    </Box>
                    <Box>
                        <TextField.Root>
                            <TextField.Slot>
                                <SlSocialVkontakte />
                            </TextField.Slot>
                            <TextField.Input placeholder="VKontakte link" />
                        </TextField.Root>
                    </Box>
                    <Box>
                        <TextField.Root>
                            <TextField.Slot>
                                <FaInstagram />
                            </TextField.Slot>
                            <TextField.Input placeholder="Telegram link" />
                        </TextField.Root>
                    </Box>
                </Flex>
                <Flex direction='column' gap='4' mb='7'>
                    <Heading mb='3'>Details</Heading>
                    <Box>
                        <Text as="label">Referrer</Text>
                        <TextField.Root>
                            <TextField.Slot>
                                <Link2Icon />
                            </TextField.Slot>
                            <TextField.Input placeholder="Referral username" />
                        </TextField.Root>
                    </Box>
                    <Box>
                        <Text as="label" size="2">
                            <Flex gap="3">
                                <Switch defaultChecked /> Respectful form of communication
                            </Flex>
                        </Text>
                    </Box>
                    <Box>
                        <Text as="label">Channel</Text>
                        <Select.Root defaultValue="none">
                            <Select.Trigger className={css.select} />
                            <Select.Content >
                                <Select.Group>
                                    <Select.Item value="none">Select channel</Select.Item>
                                    <Select.Item value="kwork">Kwork</Select.Item>
                                    <Select.Item value="upwork">Upwork</Select.Item>
                                    <Select.Item value="facebook">Facebook</Select.Item>
                                    <Select.Item value="threads">Threads</Select.Item>
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </Box>
                    <Box>
                        <Text as="label">Note</Text>
                        <TextArea placeholder="What you can tell about this person?"/>
                    </Box>
                </Flex>
            </Grid>
        </Section>
    </>
}