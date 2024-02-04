import {
    AlertDialog,
    Button,
    Flex,
} from "@radix-ui/themes"


export default function DialogEndSession() {
    return <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Ending session</AlertDialog.Title>
        <AlertDialog.Description size="2">
            Are you sure? When you end session you have 5 minutes to undone and continue.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
                <Button variant="solid" color="red">
                    End session
                </Button>
            </AlertDialog.Action>
        </Flex>
    </AlertDialog.Content>
}
