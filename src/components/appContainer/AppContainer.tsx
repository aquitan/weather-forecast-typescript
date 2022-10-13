import { Container, ContainerProps } from "@mui/material";

type AppContainerType = ContainerProps & {}

const AppContainer = ({maxWidth, children}:AppContainerType) => {
    return (
        <Container maxWidth={maxWidth}>
            {children}
        </Container>
    )
}
export default AppContainer;