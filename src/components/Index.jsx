import React from 'react';

export class Index extends React.Component {
  render() {
    return (
      <div id='home'>
        <div className='chords'>
          <h2>Chords</h2>
        </div>
        <div className='arpeggios'>
          <h2>Arpeggios</h2>
        </div>
      </div>);
  }
}

export default Index;
