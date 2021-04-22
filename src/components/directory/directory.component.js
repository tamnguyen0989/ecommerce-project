import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'


const Directory = ({sections}) => (
  <div className='directory-menu'>
    {
      sections.map(({ title, imageUrl, size, id }) =>
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
        />
      )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);