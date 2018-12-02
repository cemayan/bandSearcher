import * as React from 'react';
// tslint:disable-next-line:no-import-side-effect
import './App.css';
import Home from './components/home/index';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Me from './components/home/me';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function App(props: Props) {

  return (
    <Router>
    <div>
    <Menu fixed="top" inverted={true}>
      <Container>
        <Menu.Item as="a"  header={true}>
          <Image size="mini" src="favicon.ico" style={{ marginRight: '1.5em' }} />
          Band Searcher
        </Menu.Item>
           <Link   to="/" className="item">Home</Link>
           <Link   to="/me" className="item">Me</Link>
      </Container>
    </Menu>

    <Container text={true} style={{ marginTop: '7em' }}>
            <Route exact={true} path="/" component={() => <Home {...props}/>} />
            <Route exact={true} path="/me" component={() => <Me/>} />
    </Container>

  </div>
  </Router>
  );
}

export default App;
