import { createSelector } from 'reselect'

const selectedUser = state => state.user

export const selectedCurrentUser = createSelector(
    [selectedUser],
    user => user.currentUser
)