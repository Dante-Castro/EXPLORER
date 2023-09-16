import { Container } from "./style";

export function Button({title, loading = false, ...rest}){
  return(
    <Container 
    type="button"
    disable = {loading}
    {...rest}
    >
      { loading ? 'Carregando...' : title}
    </Container>
  )
}