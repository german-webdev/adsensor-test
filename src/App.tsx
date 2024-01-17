import { Header } from "./components/Header/Header";
import { ItemList } from "./components/ItemList";
import { Container } from "./components/Container";
import { data } from './mock';

function App() {

  return (
    <Container>
      <Header>Замечания и рекомендации</Header>
      <ItemList data={data} />
    </Container>
  )
}

export default App;
