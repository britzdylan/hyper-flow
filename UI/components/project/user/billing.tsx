import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FormInput,
} from '#components'
import type UserSubscription from '#models/user_subscription'
import { UserSettingsBase } from '#ui/components/project/user/user-settings'

function PaymentDetailsEmptyState() {
  return (
    <div class="flex flex-col items-center justify-center gap-2 bg-secondary/20 text-foreground/50 typeSmall rounded-md p-8">
      You do not have any payment methods
      <Button variant="outline">Choose a plan</Button>
    </div>
  )
}

function PaymentDetails({ billing }: { billing: UserSubscription }) {
  return (
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>
          Payments for domains, add-ons, and other usage are made using the default card.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {billing.cardBrand && billing.cardLastFour ? (
          <>
            <FormInput
              disabled
              value={billing.cardBrand}
              label="Card brand"
              name="card_brand"
              placeholder=""
            />
            <FormInput
              disabled
              value={billing.cardLastFour}
              label="Card number"
              name="card_brand"
              placeholder=""
            />
          </>
        ) : (
          <PaymentDetailsEmptyState />
        )}
      </CardContent>
      {billing.updatePaymentMethod ? (
        <CardFooter class="border-t border-border bg-secondary text-secondary-foreground font-medium p-6 py-4 justify-between">
          <small class="typeSmall">
            To update your payment details & view detailed information about your plan:
          </small>
          <a href={billing.updatePaymentMethod} title="Update payment method" target="_blank">
            <Button>Update payment method</Button>
          </a>
          {/* TODO: Use urls.update_payment_method */}
        </CardFooter>
      ) : null}
    </Card>
  )
}
interface BillingSettingsPage {
  billing: UserSubscription
  current: {
    name: string
    description: string
    price: string
  }
  manageLink?: string
  upgradeLink?: string
}

export function BillingSettingsPage({
  upgradeLink,
  current,
  billing,
  manageLink,
}: BillingSettingsPage): JSX.Element {
  return (
    <UserSettingsBase>
      <div class="flex flex-col gap-8">
        <Card class="w-full">
          <CardHeader class="flex flex-row justify-between items-center">
            <CardTitle>{current.name}</CardTitle>
            {billing.subscriptionId && upgradeLink ? (
              <a href={upgradeLink} target="_blank">
                <Button variant="outline" size="sm">
                  Upgrade to Pro
                </Button>
              </a>
            ) : null}
          </CardHeader>
          <CardContent>
            <div class="flex flex-col items-center justify-center gap-2 bg-secondary/20 text-foreground/50 typeSmall rounded-md p-8">
              You are still on the free plan
              <Button variant="outline">Choose a plan</Button>
            </div>
          </CardContent>
          {billing.subscriptionId ? (
            <CardFooter class="border-t border-border bg-secondary text-secondary-foreground font-medium p-6 py-4 justify-between">
              <small class="typeSmall">
                To update your billing details & view detailed information about your plan:
              </small>
              <a href={manageLink} target="_blank">
                <Button>Manage Subscription</Button>
              </a>
            </CardFooter>
          ) : null}
        </Card>
        <PaymentDetails billing={billing} />
      </div>
    </UserSettingsBase>
  )
}
