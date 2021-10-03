import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Dialog, DialogContent, DialogTitle, List, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import KitsDialog from '../KitsDialog';
import GetAppIcon from '@material-ui/icons/GetApp';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MergeTypeIcon from '@material-ui/icons/MergeType';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#d3d3d3',
    color: 'black',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 1600,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    adicionarArquivos: {
      marginRight: theme.spacing(1),
      background: '#FF354D'
    },
    contentWrapper: {
      margin: '40px 16px',
    },
    table: {
      minWidth: 700,
    },
    divIcons: {
      display: 'flex',
      marginTop:theme.spacing(2),
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    getApp: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      paddingLeft: 20,
    },
    getData: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    getAtivi: {
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10,
    }
  });

export interface ContentProps extends WithStyles<typeof styles> {
}

function Content(props: ContentProps) {
  const { classes, projectId } = props;
  const [openDialog, setOpenDialog] = useState(false)
  const [arquivos, setArquivos] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let jwt_token = localStorage.getItem('jwt_token')
        let url = `http://localhost:8080/projects/${projectId}`;
        let response = await fetch(url, {
          method: "GET",
          headers: { 
            'Accept': 'application/json',
            'Authorization': `${jwt_token}`
          }
        });
        const arquivo = await response.json(); // read response body and parse as JSON
        // console.log(arquivo.dataOfProjects)
        setArquivos(arquivo.dataOfProjects)
      } catch (error) {
          // throw new Error(error)
      }
  };
    fetchData()
  },[arquivos])
  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
            </Grid>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Button 
              variant="contained" 
              color="primary" 
              className={classes.adicionarArquivos} 
              onClick={() => setOpenDialog(true)}>
                Adicionar arquivos
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <KitsDialog productId={projectId}></KitsDialog>
      </Dialog>
      <div className={classes.contentWrapper}>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome do arquivo</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>


          {arquivos !== undefined ? (arquivos.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.name}</TableCell>
              </TableRow>
            ))) : (
            <Typography color="textSecondary" align="center">
              Nenhum projeto para esse usuario ainda
            </Typography>
          )  }
            
            
            {/* {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))} */}
          </TableBody>
        </Table>
       
      </TableContainer>

      <div className={classes.divIcons}>
        <div className={classes.getData}>
          <Button onClick={async () => {
            let jwt_token = localStorage.getItem('jwt_token')
            let url = `http://localhost:8080/projects/${projectId}/fixData`;
            let response = await fetch(url, {
              method: "POST",
              headers: { 
                'Accept': 'application/json',
                'Authorization': `${jwt_token}`
              }
            });
            const analise = await response; // read response body and parse as JSON
            // console.log(arquivo.dataOfProjects)
            console.log(analise)
          }}>
            <label>Padronização das datas</label>
            <DateRangeIcon fontSize="large" />
          </Button>
        </div>
        <div className={classes.getAtivi}>
          <Button>
            <label>Aplicar analise de atividades e datas</label>
            <MergeTypeIcon fontSize="large" 
            onClick={async() => {
              let jwt_token = localStorage.getItem('jwt_token')
              let url = `http://localhost:8080/projects/${projectId}/analysis`;
              let response = await fetch(url, {
                method: "POST",
                headers: { 
                  'Accept': 'application/json',
                  'Authorization': `${jwt_token}`
                }
              });
              const analise = await response; // read response body and parse as JSON
              // console.log(arquivo.dataOfProjects)
              console.log(analise)
            }} />
          </Button>
        </div>
        <div className={classes.getApp}>
          <Button>
            <label>Baixar XES</label>
            <GetAppIcon fontSize="large" onClick={() => {alert("a")}}/>
          </Button>
        </div>
    </div>

      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);