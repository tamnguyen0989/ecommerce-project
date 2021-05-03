import { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './shop.styles.scss'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import CollectionPageContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync()
    }, [fetchCollectionsStartAsync])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);