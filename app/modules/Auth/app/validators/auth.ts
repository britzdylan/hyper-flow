import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const emailAndPasswordStrict = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32).confirmed(),
  })
)

export const emailAndPassword = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
  })
)

export const emailVerification = vine.compile(
  vine.object({
    email: vine.string().email(),
  })
)
