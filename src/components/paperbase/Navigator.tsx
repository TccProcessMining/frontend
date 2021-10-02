import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import { Omit } from '@material-ui/types';
import { Dialog } from '@material-ui/core';
import AddProject from '../AddDialog';
import Link from 'next/link'


// const categories = [
//   {
//     id: 'Projects',
//     children: [
//       { id: '1', name: 'Teste', icon: <ClassIcon />, active: true },
//       { id: '2', name: 'lucca', icon: <ClassIcon />, active: true },
//     ],
//   },
// ];

const children = [
  {id: 'f40d657c-5c2a-44c3-82c6-e2baec70bd59', name: 'teste'},
  {id: '1a42cf2e-48a9-48d1-a225-029bf7a3bb84', name: 'teste123'},
  {id: '1cee2d87-c833-44ac-9aeb-e8627a057a0e', name: 'luccatest'},
  {id: 'b70625e0-0473-408c-9eed-7acc9da59637', name: 'testeClass'},
];


const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },

    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },

    },
    itemCategory: {
      backgroundColor: '#000000',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: "#FF354D",
    },
    adicionarProjeto: {
      color: 'white',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  });

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {}

function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;
  const [openDialog, setOpenDialog] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        try {
          let jwt_token = localStorage.getItem('jwt_token')
          let url = 'http://localhost:8080/users';
          let response = await fetch(url, {
            headers: { 
              'Accept': 'application/json',
              'Authorization': `${jwt_token}`
            }
          });
          const projeto = await response.json(); // read response body and parse as JSON
          // setProjects(projeto.)
          setProjects(projeto.projectList)
        } catch (error) {
            alert(error.message)
        }
    };
      fetchData()
    },[projects])
  
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          <img  src='https://res.cloudinary.com/dyuwmrtpw/image/upload/v1631074058/mine_a_supvft.svg' alt="MineLogo"/>
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItem button> 
          <ListItemText
            onClick={() => setOpenDialog(true)}
            classes={{
              primary: classes.itemPrimary,
            }}
            className={classes.adicionarProjeto}
          >
            Adicionar Projeto
          </ListItemText>
          </ListItem>
        </ListItem>


          <React.Fragment >
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                Projects
              </ListItemText>
            </ListItem>

            {projects.map(({ id: childId, name }) => (  //arrumar aqui 
              <Link key={childId} href={`/dashboard/${childId}`}>
                <ListItem
                  button
                  className={clsx(classes.item, classes.itemActiveItem)}
                >
                  <ListItemIcon className={classes.itemIcon}><ClassIcon /></ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {name}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
      

      </List>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <AddProject />
      </Dialog>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);