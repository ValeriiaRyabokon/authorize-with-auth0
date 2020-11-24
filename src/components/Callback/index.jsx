import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {withAuth} from '../Auth/index'

class Callback extends Component {
    componentDidMount(){
        const {handleAuthentication}=this.props;
        if(handleAuthentication){
            handleAuthentication()
        }
    }
    render(){
    return <CircularProgress disableShrink style={{
     position:'relative',
     left:'50%',
     marginTop:'150px'
    }}/>;
}}
export default withAuth(Callback)