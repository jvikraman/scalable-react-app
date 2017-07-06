/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectNavigationContainer from './selectors';
import styles from './styles.css';
import Navigation from '../../components/Navigation';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.navigationContainer}>
      
      <Navigation {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
