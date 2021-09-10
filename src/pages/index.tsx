import React, { useState } from "react"
import {
	TextField,
	Button,
	makeStyles,
	Container,
	Link,

} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	div: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: theme.spacing(35),

	},
	a: {
		paddingTop: '100px',
		marginBottom: '100px',
		color: '#FF354D'
	},
	img: {
		width: theme.spacing(30),
		height: theme.spacing(10),
	},
	button: {
		marginTop: theme.spacing(1),
		background: 'linear-gradient(45deg, #FF354D 30%, #FFD974 90%)',
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
	imagem: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
}))

export default function Login() {
	const classes = useStyles()
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

				<Link
					className={classes.a}
					onClick={() => {
						console.log("clicked button")
						location.href = "http://localhost:3000/cadastro"
					}}
				>
					Não tem cadastro ainda? clique aqui
				</Link>

				<Link
					component="button"
					variant="body2"
					onClick={() => {
						console.log("clicked button")
						location.href = "http://localhost:3000/dashboard"
					}}
					className={classes.button}
				>
					Entrar
				</Link>
			</form>
		</div>
	)
}
