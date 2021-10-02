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
import { Dialog, DialogContent, DialogTitle, List, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import KitsDialog from '../KitsDialog';
import api from '../../services/api';
import { getArquivos } from '../../hooks/getData';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 1280,
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
  });

export interface ContentProps extends WithStyles<typeof styles> {}

function Content(props: ContentProps) {
  const { classes } = props;
  const [openDialog, setOpenDialog] = useState(false)
  const [arquivos, setArquivos] = useState([])
  
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userToken = localStorage.getItem('user_token')
  //       const arq = getArquivos(userToken) 
  //       setArquivos( await Promise.resolve(arq))
        
  //     } catch (error) {
          
  //     }
  // };
  //   fetchData()
  // },[])
  
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
        <KitsDialog></KitsDialog>
      </Dialog>
      <div className={classes.contentWrapper}>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome do arquivo</StyledTableCell>
              <StyledTableCell align="center">Baixar aquivo XES</StyledTableCell>
              <StyledTableCell align="center">Deletar arquivo</StyledTableCell>
              <StyledTableCell align="center">Fazer analise de datas</StyledTableCell>
              <StyledTableCell align="center">fazer analise de atividades</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        {/* <Typography color="textSecondary" align="center">
          Nenhum projeto para esse usuario ainda
        </Typography> */}
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);