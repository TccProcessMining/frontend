import React, { useState } from "react"
import { TextField, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

function FormularioCadastro() {
	const [email, setEmail] = useState("")
	const [senha, setSenha] = useState("")
	const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault()
			}}
		>
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
			<a href={`http://localhost:3000/cadastro`}>
				<Button type="submit" variant="contained" color="primary">
					Entrar
				</Button>
			</a>
		</form>
	)
}

export default { FormularioCadastro }
