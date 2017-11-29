import React from 'react';
import { setChordDiagrams } from '../actions/chordDiagrams'
import { connect } from 'react-redux'

export class DiagramConfig extends React.Component {
  constructor(props) {
    super();

    this.state = {
      config: JSON.stringify(props.chordDiagrams)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({config: JSON.stringify(nextProps.chordDiagrams)});
  }

  setChordDiagrams() {
    this.props.setChordDiagrams(this.state.config);
  }

  updateConfig(event) {
    this.setState({config: event.target.value}); 
  }

  render() {
    return (<div className='diagram-config'>
      <textarea 
        onChange={this.updateConfig.bind(this)}
        value={this.state.config} 
      />
      <button type='submit' 
        onClick={this.setChordDiagrams.bind(this)}>
        Update Diagrams</button>
    </div>);
  }
};

export default connect(
  state => { return { chordDiagrams: state.chordDiagrams }; },
  dispatch => { 
    return { 
      setChordDiagrams: (index) => {
        return dispatch(setChordDiagrams(index));
      }
    }; 
  }
)(DiagramConfig);
