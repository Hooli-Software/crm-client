'use client'

import { Theme } from '@radix-ui/themes';


export default function Providers({children}: {children: React.ReactNode}) {
    return <Theme appearance="dark" accentColor='mint' scaling='110%'>
        {children}
    </Theme>
}