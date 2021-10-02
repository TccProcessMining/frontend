import { Button, DialogContent, DialogTitle, makeStyles, TextField} from "@material-ui/core";
import React, { useState } from "react";
import api from "../services/api";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: theme.spacing(50),
    height:theme.spacing(10),
    backgroundColor: '#d3d3d3',
    display: 'flex',
    marginTop: '5px',
    marginBottom: '8px',
    borderRadius: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    color: 'white',
    backgroundColor: '#ff5d70',
    display: 'flex',
    alignContent: 'center',
    '&:hover': {
      backgroundColor: '#FF354D',
      color: 'white',
    },
    marginBottom: '10px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }
}))

export default function KitDialog(){
  const classes = useStyles()
  const [data,setData] = useState(null)
  

  return (
      <DialogContent>
        <DialogTitle className={classes.title}> Adicionar Arquivo </DialogTitle>
        <input type="file" className={classes.input} onChange={(event) =>{setData(event.target.value)
        console.log(event.target.value)}}/>

        <Button
        variant="contained" 
        color="primary" 
        fullWidth
        className={classes.button}
        onClick={
        async (event) => {
          event.preventDefault()

          // if(data !== null){
          //  let jwt_token = localStorage.getItem('jwt_token')
          //   await fetch(`http://localhost:8080/projects/${token_project_id}//upload`, {
          //       method: "POST",
          //       headers: {
          //         "Content-Type": "application/json",
          //         Authorization: `${jwt_token}`,
          //       },
          //       body: data
          //     }).then((response) => {
          //       console.log(response)
          //     }).catch((error) => {
          //       alert(error.message)
          //       throw new Error(error)
          //     });
            
          // }else{
          //   alert('Nao foi possivel subir nem arquivo, seecione primeiramente o arquivo')
          // }
        }
        }>
        Adicionar
      </Button>
      </DialogContent>
  )
}