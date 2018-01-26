import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import Home from './components/home/Home';
import Create from './components/create/Create';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Paper>
                            <Header/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <Paper>
                            <Sidebar/>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>
                            <main>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/create" component={Create}/>
                            </main>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
