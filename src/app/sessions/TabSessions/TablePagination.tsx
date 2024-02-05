import { memo } from "react";

import {
    Button,
    IconButton,
    Flex
} from "@radix-ui/themes";
import {
    ArrowLeftIcon,
    ArrowRightIcon
} from "@radix-ui/react-icons";


function TablePagination() {
    return <>
        <Flex gap='2' align='center'>
            <IconButton variant="surface">
                <ArrowLeftIcon/>
            </IconButton>
            <Button variant="soft">
                1
            </Button>
            <Button variant="soft" disabled>
                2
            </Button>
            <Button variant="soft">
                3
            </Button>
            <IconButton variant="surface">
                <ArrowRightIcon/>
            </IconButton>
        </Flex>
    </>
}


export default memo(TablePagination)