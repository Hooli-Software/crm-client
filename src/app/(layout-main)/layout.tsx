'use client'
import { useRouter, usePathname } from "next/navigation";
import {
    Box,
    Container,
    Tabs,
} from "@radix-ui/themes";

import { pages } from "./pages";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    const pathname = usePathname()

    return <Container p='3' py='5' size='3'>
        <Tabs.Root defaultValue="sessions">
            <Tabs.List>
                {
                    pages.map(page =>
                        <Tabs.Trigger
                            key={page.value}
                            value={page.value}
                            data-state={pathname.includes(page.value) && 'active'}
                            onClick={ () => router.push(`/${page.value}`) }
                        >
                            {page.title}
                        </Tabs.Trigger>
                    )
                }
            </Tabs.List>

            <Box px="4" pt="5" pb="2">
                {children}
            </Box>
        </Tabs.Root>
    </Container>
}