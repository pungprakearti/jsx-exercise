class Person extends React.Component {
  render() {
    return (
      <p>
        Learn some information about this Person
        <h2>
          {this.props.name.length > 8
            ? this.props.name.slice(0, 6)
            : this.props.name}
        </h2>
        <h3>{this.props.age >= 18 ? 'Please go vote!' : 'You must be 18'}</h3>
        <ul>
          {this.props.hobbies.map(hobby => {
            return <li>{hobby}</li>;
          })}
        </ul>
      </p>
    );
  }
}
