class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <span>
          <span className="username">{this.props.username}</span>
          <span className="name">{this.props.name}</span>
          <span className="date">{this.props.date}</span>
        </span>
        <br />
        <div className="message">{this.props.message}</div>
      </div>
    );
  }
}
