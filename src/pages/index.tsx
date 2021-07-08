import React from 'react'
import {Input, Container, Label,InputQuestion,Div,Button} from '../styles/pages/Home'

export default function Home() {
    return (
        <Container>
            <title>Ferramenta de pré-processamento de dados</title> 
            <Label>Nome da marca com a Logo</Label>

            <Div>
                <InputQuestion>Email: </InputQuestion>
                <Input type="text" />
                <InputQuestion>Password: </InputQuestion>
                <Input type="password" /> 
                <Button> SingIn </Button>
            </Div>
              
        </Container>
    )
}





