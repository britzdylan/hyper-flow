import router from '@adonisjs/core/services/router'
import { BillingConfig } from '#modules/config'
import SubscriptionController from '../app/controllers/Subscription.js'
import { middleware } from '#start/kernel'

const { getCheckoutUrl, hookSubscription, cancelSubscription } = BillingConfig.actions
const { routeIdPrefix } = BillingConfig

router
  .group(() => {
    router
      .get(`${getCheckoutUrl.route}`, [SubscriptionController, 'getCheckoutUrl'])
      .as(`${routeIdPrefix}getCheckoutUrl`)

    router
      .post(`${hookSubscription.route}`, [SubscriptionController, 'hookSubscription'])
      .as(`${routeIdPrefix}hookSubscription`)

    router
      .delete(`${cancelSubscription.route}`, [SubscriptionController, 'cancelSubscription'])
      .as(`${routeIdPrefix}cancelSubscription`)
  })
  .use(middleware.auth())
