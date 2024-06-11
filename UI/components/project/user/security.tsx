import { Button } from '#primitives/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#primitives/card'
import { Form } from '#primitives/form'
import { UserSettingsBase } from '#ui/components/project/user/base'

export function SecuritySettingsPage({ url }: { url: string }) {
  return (
    <UserSettingsBase>
      <Card class="w-full border-destructive overflow-hidden">
        <CardHeader>
          <CardTitle>Close your account</CardTitle>
        </CardHeader>
        <CardContent>
          Permanently close your account and erase all of your data. This action is not reversible,
          so please continue with caution.
        </CardContent>

        <CardFooter class="border-t border-destructive bg-destructive/10 text-secondary-foreground font-medium p-6 py-4 justify-between">
          <Form
            name="deleteAccountForm"
            id="deleteAccountForm"
            hx-delete={url}
            hx-confirm="Are you sure you wish to delete your account?"
          >
            <Button size="sm" class="ml-auto" variant="destructive">
              Delete Account
            </Button>
          </Form>
        </CardFooter>
      </Card>
    </UserSettingsBase>
  )
}
