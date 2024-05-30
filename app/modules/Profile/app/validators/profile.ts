import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const patchProfile = vine.compile(
  vine.object({
    firstName: vine.string().maxLength(72).optional(),
    lastName: vine.string().maxLength(72).optional(),
    bio: vine.string().maxLength(300).optional(),
  })
)
