import { Button, DialogContent, DialogTitle, makeStyles, TextField} from "@material-ui/core";
import React, { useState } from "react";
import api from "../services/api";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: theme.spacing(50),
    height:theme.spacing(10),
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
  }
}))

export default function AddProject(){
  const classes = useStyles()
  const [name, setName] = useState('')
  

  return (
      <DialogContent >
        <DialogTitle className={classes.title}> Nomear Projeto </DialogTitle>
        <div className={classes.dialog}>
          <TextField
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
            id="name"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          
        </div>
        <Button
         variant="contained" 
         color="primary" 
         fullWidth
         className={classes.button}
         onClick={
          async (event) => {
            event.preventDefault()
            if(name !== ""){
              console.log(name)
              let jwt_token = localStorage.getItem('jwt_token')

              await fetch(`http://localhost:8080/projects/${name}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `${jwt_token}`,
                },
              }).then((response) => {
                console.log(response)
              }).catch((error) => {
                alert(error.message)
                throw new Error(error)
              });

              // await api.post(`/projects/${name}`,{
              //   headers: {
              //     'Authorization': jwt_token
              //   },
              // }).then((response) => {
              //   console.log(response)
              // }).catch((error) => {
              //   alert(error.message)
              //   throw new Error(error)
              // })
            }
          }
         }>
          Criar Projeto
        </Button>
      </DialogContent>
  )
}