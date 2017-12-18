import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import Home from './components/home/Home';
import Create from './components/create/Create';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col xs="1">
                        <aside>
                            <Sidebar/>
                        </aside>
                    </Col>
                    <Col xs="11">
                        <main>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/create" component={Create}/>
                        </main>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
