import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <h1>Home</h1>
                </div>
                <div className="p-2">
                    <a href="/listar-cliente"
                        className="btn btn-success btn-sm">Listar</a>
                </div>

            </Container>
        </div>
    );
};