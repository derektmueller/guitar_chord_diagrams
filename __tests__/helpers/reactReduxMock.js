import React from 'react';

module.exports = {
  connect: (mapStateToProps, mapDispatchToProps) => {
    return (component) => {
      let connected = { component };

      return (props) => {
        return <connected.component 
          {...Object.assign(
            {}, 
            props, 
            mapDispatchToProps(() => {})
          )} />;
      }
    }
  }
}
