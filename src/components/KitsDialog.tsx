import { Button, DialogContent, DialogTitle, makeStyles} from "@material-ui/core";
import React from "react";

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

export default function KitDialog({productId}){
  const classes = useStyles()
  // const [data,setData] = useState([])
  const formData  = new FormData();

  const onFileChange = (event) => {
    console.log(event.target.files[0])
    if(event.target && event.target.files[0]){
      formData.append("file", event.target.files[0])
    }
  }

  const onSubmitFile = async(event) => {
    event.preventDefault()
    if(formData !== null){
      let jwt_token = localStorage.getItem('jwt_token')
      await fetch(`http://localhost:8080/projects/${productId}/upload`, {
       method: "POST",
       headers: {'Authorization': jwt_token},
       body: formData // ver aqui o file subir 
     }).then((response) => {
      console.log(response.blob())
     }).catch((error) => {
       alert(error.message)
       throw new Error(error)
     });
     }else{
       alert('Nao foi possivel subir nem arquivo, selecione primeiramente o arquivo')
     }
  }

  return (
      <DialogContent>
        <DialogTitle className={classes.title}> Adicionar Arquivo </DialogTitle>
        <input type="file" className={classes.input} 
          onChange={onFileChange}/>

        <Button
        variant="contained" 
        color="primary" 
        fullWidth
        className={classes.button}
        onClick={onSubmitFile}>
        Adicionar
      </Button>
      </DialogContent>
  )
}
