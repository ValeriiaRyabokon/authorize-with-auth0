import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

export default function Header() {
    return (
       <>
        <Typography style={{
          display:'flex',
          justifyContent:' space-evenly', 
          background:'#ACD6A0',
          padding:'30px'
        }}>
          <Link to="/public" style={{
            textDecoration:'none',
            fontSize:30,
            fontWeight:900,
            color:'#EFF6EC'
          }}>
            Public
          </Link>
          <Link to="/private" style={{
            textDecoration:'none',
            fontSize:30,
            fontWeight:900,
            color:'#EFF6EC'
          }}>
            Private
          </Link>
        </Typography>
       </>
    )
}
