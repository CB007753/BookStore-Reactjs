import React from 'react';
import { useState, useEffect } from 'react';
//import MaterialTable from 'material-table';
import TopBar from './TopBar';
import Axios, * as others from 'axios';

//for table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  

   


function MemberDetails() {
    const [tableData, setTableData] = useState([]);
    


    useEffect(() => {

        Axios.get("http://localhost:3001/api/viewmembers").then((response) => {
            setTableData(response.data);
           
        });

    },[]);

    


    return (
        <div>
            <TopBar/>
            {/* <MaterialTable columns={columns} data={tableData}
            options={{searchFieldAlignment:"right", searchFieldVariant:"filled", pageSizeOptions:[5,10,20,25,50],
            paging:false, exportButton:true,
            rowStyle:{background:"lightblue",fontSize:"115%"},
            headerStyle:{background:"#4169E1", fontSize:"125%"},}}
            title="Member Information" /> */}

            <br/><br/>
            <h1>
                Showcase Book Shop Members List
            </h1>
            <br/><br/>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead> 
          
          <TableRow style={{backgroundColor:'red', color: 'white',}}>

            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Full Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Password</StyledTableCell>
            <StyledTableCell align="right">Delete Member</StyledTableCell>
            

          </TableRow>
          
        </TableHead>
        <TableBody>

            
            {tableData.map((customer) => {
                return(
                  
                    <StyledTableRow  key= {customer.id}>
                    <StyledTableCell component="th" scope="row">
                      {customer.id}
                    </StyledTableCell>
      
                    <StyledTableCell align="right">{customer.Fullname}</StyledTableCell>
                    <StyledTableCell align="right">{customer.Email}</StyledTableCell>
                    <StyledTableCell align="right">{customer.Phone}</StyledTableCell>
                    <StyledTableCell align="right">{customer.Password}</StyledTableCell>
                    <StyledTableCell align="right"><button>Delete</button></StyledTableCell>
                    
      
                  </StyledTableRow>
                    
                );
            })}

          
            
            

            
         
        </TableBody>
      </Table>
    </TableContainer>



{/* imported the material icons font via html due to unknown technical issue with material-ui/icons and material-ui/core*/}
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

        </div>
    )
}

export default MemberDetails
