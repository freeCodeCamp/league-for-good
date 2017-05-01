import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initAuthState } from '../actions/index';
import Spinner from './LoadingPage.jsx';

export default function(ComposedComponent){

  class loadState extends Component{
    componentWillMount(){
      this.props.initAuthState();
    }

    render(){
      const { initAuthState, ...props} = this.props;

      if(props.loading) return <Spinner/>

      return <ComposedComponent {...props}/>
    }
  }
  
  function mapStateToProps({auth}){
    const {loggedIn, loading} = auth;
    return {loggedIn, loading};
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({initAuthState},dispatch);
  }
  return connect(mapStateToProps, mapDispatchToProps)(loadState);
}


