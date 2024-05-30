import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const patchProfile = vine.compile(
  vine.object({
    firstName: vine.string().fixedLength(72).optional(),
    lastName: vine.string().fixedLength(72).optional(),
    bio: vine.string().fixedLength(300).optional(),
  })
)
