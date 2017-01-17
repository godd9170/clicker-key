import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   document.addEventListener('click', () => {
  //     console.log('gmail: ', this.props.gmail);
  //     console.log('email: ', this.props.gmail.get.user_email());
  //     this.props.dispatch({
  //       type: 'ADD_COUNT'
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        {this.props.gmail.get.user_email()}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   };
// };

// export default connect(mapStateToProps)(App);
export default App;