import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectedShop = state => state.shop

export const selectedShopCollections = createSelector(
    [selectedShop],
    shop => shop.collections
)

export const selectedShopCollection = collectionUrlParam => createSelector(
    [selectedShopCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)