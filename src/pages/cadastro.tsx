import React, { useState } from "react"
import {
	TextField,
	makeStyles,
	Link,
} from "@material-ui/core"
import api from "../services/api"

const useStyles = makeStyles((theme) => ({
	div: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: theme.spacing(50)
	},
	imagem: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		marginTop: theme.spacing(4),
		background: "linear-gradient(45deg, #FF354D 30%, #FFD974 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		width: "100%",
		height: 48,
		padding: "0 30px",
		fontSize: "20px",
		fontWeight: 500,
	},
	img: {
		width: theme.spacing(30),
		height: theme.spacing(10),
	},
}))

export default function Cadastro() {
	const classes = useStyles()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [senha, setSenha] = useState("")

	return (
		<div className={classes.div}> 
			<form
				onSubmit={async (event) => {
					event.preventDefault()
					if(name !== "" && senha !== "" && email !== "" ){
						await api.post("/users/signup",{
							name,
							mail: email,
							password: senha,
						}).then((response) => {
							location.href = "http://localhost:3000/"
							console.log(response)
						}).catch((error) => {
							alert(error.message)
							throw new Error(error)
						})
					}
				}}
			>
				<div className={classes.imagem}>
					<img className={classes.img} src='https://res.cloudinary.com/dyuwmrtpw/image/upload/v1631074058/mine_a_supvft.svg' alt="MineLogo"/>
				</div>
				
        <TextField
					value={name}
					onChange={(event) => {
						setName(event.target.value)
					}}
					id="name"
					label="Name"
					variant="outlined"
					margin="normal"
					fullWidth
					required
				/>

				<TextField
					value={email}
					onChange={(event) => {
						setEmail(event.target.value)
					}}
					id="email"
					label="Email"
					variant="outlined"
					type="email"
					margin="normal"
					fullWidth
					required
				/>

				<TextField
					value={senha}
					onChange={(event) => {
						setSenha(event.target.value)
					}}
					id="senha"
					label="Senha"
					variant="outlined"
					margin="normal"
					type="password"
					fullWidth
					required
				/>


				<Link
					component="button"
					variant="body2"
					className={classes.button}
				>
					Cadastrar
				</Link>
			</form>
		</div>
	)
}
