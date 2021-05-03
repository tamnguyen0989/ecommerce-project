import { convertCollectionsSnapshotToMap,firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const updateCollections = collectionMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})

export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
}

export const fetchCollectionsSuccess = collectionMap => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionMap
    }
}

export const fetchCollectionsFailure = errorMessage => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        collectionRef.get()
            .then(snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionMap))
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.Message)))
    }

}