import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Section from './Section';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Section />
      </div>
    )
  }
}

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(Home);