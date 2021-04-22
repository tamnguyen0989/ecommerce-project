import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectedShopCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collection-overview.styles.scss'

const CollectionOverview = ({collections}) => (
    <div>
        {collections.map(({ id, ...otherCollectionProps }) =>
            <CollectionPreview key={id} {...otherCollectionProps} />
        )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectedShopCollections
})

export default connect(mapStateToProps)(CollectionOverview)