import { createSelector } from 'reselect'

const selectedShop = state => state.shop

export const selectedShopCollections = createSelector(
    [selectedShop],
    shop => shop.collections
)