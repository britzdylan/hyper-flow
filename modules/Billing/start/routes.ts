import router from '@adonisjs/core/services/router'
import { BillingConfig } from '#modules/config'
import SubscriptionController from '../app/controllers/Subscription.js'
import { middleware } from '#start/kernel'

const { getCheckoutUrl, renderBillingSettings, hookSubscription, cancelSubscription } =
  BillingConfig.actions
const { routeIdPrefix } = BillingConfig

router
  .group(() => {
    router
      .get(`${renderBillingSettings.route}`, [SubscriptionController, 'renderBillingSettings'])
      .as(`${routeIdPrefix}renderBillingSettings`)
      .prefix('settings')
    router
      .get(`${getCheckoutUrl.route}`, [SubscriptionController, 'getCheckoutUrl'])
      .as(`${routeIdPrefix}getCheckoutUrl`)

    router
      .post(`${hookSubscription.route}`, [SubscriptionController, 'hookSubscription'])
      .as(`${routeIdPrefix}hookSubscription`)

    router
      .delete(`${cancelSubscription.route}`, [SubscriptionController, 'cancelSubscription'])
      .as(`${routeIdPrefix}cancelSubscription`)
      .prefix('settings')
  })
  .use(middleware.auth())
