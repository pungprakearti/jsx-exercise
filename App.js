ReactDOM.render(
  <div>
    <FirstComponent />
    <NamedComponent name="Hinesh" />

    <Tweet
      username="Georgie"
      name="George Lucas"
      date="5/4/18"
      message="May the fourth be with you!"
    />
    <Tweet
      username="HappyHasi"
      name="Hasier P."
      date="10/29/18"
      message="Burritos are the worst"
    />
    <Tweet
      username="Suckerberg"
      name="Mark Zuckerberg"
      date="8/02/18"
      message="I miss MySpace"
    />
    <Person name="Andrew" age={9} hobbies={['Extreme Fishing', 'Eating']} />
    <Person
      name="Hinesh"
      age={99}
      hobbies={['Peanut butter and Jelly', 'Eating']}
    />
    <Person
      name="Jay"
      age={99}
      hobbies={['Noodle Time', 'Crunching them nums']}
    />
  </div>,
  document.getElementById('root')
);
