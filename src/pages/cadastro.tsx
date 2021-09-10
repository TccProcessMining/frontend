import React, { DetailedHTMLProps, ImgHTMLAttributes, useState } from "react"
import {
	TextField,
	Button,
	makeStyles,
	Container,
	Link,

} from "@material-ui/core"
import logo from '../assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
	div: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: theme.spacing(25)
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
				onSubmit={(event) => {
					event.preventDefault()
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
				/>

				<TextField
					value={email}
					onChange={(event) => {
						setEmail(event.target.value)
					}}
					id="email"
					label="Email"
					variant="outlined"
					margin="normal"
					fullWidth
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
					fullWidth
				/>

        <TextField
					value={senha}
					onChange={(event) => {
						setSenha(event.target.value)
					}}
					id="senha-again"
					label="Repetir Senha"
					variant="outlined"
					margin="normal"
					fullWidth
				/>

				<Link
					component="button"
					variant="body2"
					onClick={() => {
						console.log("clicked button")
						location.href = "http://localhost:3000/"
					}}
					className={classes.button}
				>
					Cadastrar
				</Link>
			</form>
		</div>
	)
}
