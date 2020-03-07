import React, { Component } from 'react';

class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => {
        console.log("got eem");
        this.setState({customers});
      })
      .catch(err => console.error(err));
  }

  render() {

    const { customers } = this.state;

    return (
      <div>
        {customers.map((elem) => {
          return <p key={elem.id}>{`${elem.firstName} ${elem.lastName}`}</p>
        })}
      </div>
    );
  }
}

export default Test;
