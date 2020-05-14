import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionView from '../collection/collection-view/collection-view';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import './collection-overview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionView key={id} {...otherCollectionProps} />
      ))}
    </div>
  );

  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);