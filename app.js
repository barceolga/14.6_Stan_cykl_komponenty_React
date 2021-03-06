var Counter = React.createClass({

  getDefaultProps: function() {
    console.log('W tej metodzie można ustalić jakiekolwiek wlaściwości (propsy) dla licznika. Przykład poniżej');
      return {
        maxAmount: 50
      }
  },

  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
      this.setState({
        counter: this.state.counter + 1
      });
  },

  decrement: function() {
    this.setState({
      counter:this.state.counter - 1
    });
  },

  incrementTen: function() {
    this.setState({
      counter:this.state.counter + 10
    });
  },

  decrementTen: function() {
    this.setState({
      counter: this.state.counter -10
    });
  },

  setCounterZero: function() {
    let counter;
    if ((this.state.counter >= 25) || (this.state.counter <=-25)) {
      this.setState ({
        counter: 0
      });
    }
  },

componentWillMount: function() {
  console.log('Tutaj można na przykład ponownie zdefiniować stan wyjściowy licznika, czyli jego wartość początkową.');
  let counter;
  this.setState({
    counter: 1
  });
    return this.state.counter
},

  render: function() {
    return (
      React.createElement('div', {className: 'template_buttons'},
          React.createElement('h2', {}, 'Counter' ),
          React.createElement('div', {className: 'counter_buttons'},
            React.createElement('button', {onClick: this.increment, id: 'sumButton'}, 'Add 1'),
            React.createElement('button', {onClick: this.decrement},'Rest 1'),
            React.createElement('button', {onClick: this.incrementTen}, 'Add 10'),
            React.createElement('button', {onClick: this.decrementTen}, 'Rest 10')
          ),
          React.createElement('span', {}, 'Counter ' + this.state.counter),
      )
    )
  },
  componentDidMount: function() {
    console.log('W tej metodzie możemy wywołać wcześniej napisaną funkcję, która zeruje licznik, kiedy ten dojdzie do pewnej wartości. Przyklad poniżej');
    this.setCounterZero();
  },

  componentWillReciveProps: function() {
    console.log('W tej metodzie możemy przekazać do komponentu nowe propsy, czyli właściwości.');
  },

  shoudldComponentUpdate: function() {
    console.log("W tej metodzie możemy sprawdzi¢, czy na pewno należy refaktoryzować kod i przekazać nowe propsy do klasy.");
  },

  componentWillUpdate: function() {
    console.log('W tej metodzie, tuż przed tym jak komponent otrzyma nowe propsy i nowy stan, możemy na przykład dodać jakąś animację do strony.');
  },

  componentDidMount: function() {
    console.log('Za pomocą tej metody możemy dokonać manipulacji na drzewie DOM, na przykład dodać eventListener na zdarzenie onClick jednym z buttonów, który będzie uruchamiał funkcję do sumowania stanu wszystkich liczników na przykład');
      var sumButton = document.getElementById('sumButton');
      var sumCounters =  function() {
        return counter1.state.counter + counter2.state.counter + counter3.state.counter;
      };
      sumButton.addEventListener("click", sumCounters);
  },

  componentWillUnmount() {
    console.log('Ta metoda może nam posłużyć na przykład do odpięcia eventListenera od drzewa DOM, czyli do zakończenia nasłuchiwania.')
  }

});
var counter1 = React.createElement(Counter);
var counter2 = React.createElement(Counter);
var counter3 = React.createElement(Counter);

var element = React.createElement('div', {}, counter1, counter2, counter3);
ReactDOM.render(element, document.getElementById('app'));
