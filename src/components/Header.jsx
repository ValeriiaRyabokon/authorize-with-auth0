import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

export default function Header() {
    return (
       <>
        <Typography style={{
          display:'flex',
          justifyContent:' space-evenly', 
          background:'#F0F8FF',
          padding:'30px'
        }}>
          <Link to="/public" style={{
            textDecoration:'none',
            fontSize:30,
            fontWeight:800,
            color:'#727276'
          }}>
            Public
          </Link>
          <Link to="/private" style={{
            textDecoration:'none',
            fontSize:30,
            fontWeight:800,
            color:'#727276'
          }}>
            Private
          </Link>
        </Typography>
       </>
    )
}
