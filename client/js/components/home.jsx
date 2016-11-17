"use strict";

import React                    from 'react';
import assets                   from '../libs/assets';
import { connect }              from 'react-redux';
import { sendScore }            from '../actions/scores';

const select = (state) => {
  return {
    lmsUserId: state.settings.lmsUserId,
    lisOutcomeServiceUrl: state.settings.lisOutcomeServiceUrl,
    lisResultSourcedid: state.settings.lisResultSourcedid
  };
};

export class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      score: 0
    };
  }

  render(){

    const img = assets("./images/atomicjolt.jpg");

    return<div>
    <img src={img} />
    <br />
    <input type="text" value={this.state.score} onChange={ (e) => this.setState({score: e.target.value} )} />
    <button onClick={ (e) => this.props.sendScore(this.state.score, this.props.lisOutcomeServiceUrl, this.props.lisResultSourcedid, this.props.lmsUserId) }>Submit</button>
    </div>;
  }

}


export default connect(select, {sendScore})(Home);