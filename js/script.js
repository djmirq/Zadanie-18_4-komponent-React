// nazwę klasy na podstawie której ma zostać stworzony element
// propsy, czyli właściwości danego elementu (wejścia)
// dzieci elementu, czyli to co ma się znaleźć wewnątrz. Może to być zarówno tekst jak i kolejny ReactElement

var element = React.createElement("div", {}, "Hello world!");

var movies = [
  {
    id: 1, //klucz musi być aby react mógł distinctowo odświeżać tylko jeden element listy
    title: "Harry Potter",
    desc: "film o czarodzieju",
    src:
      "http://filmaster.com/media/cache/4d/18/4d18af1ebedef372140b897ba2a9844e.jpg",
    alt: "Harry"
  },
  {
    id: 2,
    title: "Król Lew",
    desc: "Film o królu sawanny",
    src: "https://i.iplsc.com/-/00048PYP17WX1CKX-C460.jpg",
    alt: "Lion"
  },
  {
    id: 3,
    title: "Rambo III",
    desc: "Film o debeściaku",
    src: "https://1.fwcdn.pl/po/90/62/9062/7203997.6.jpg",
    alt: "Hero"
  },
  {
    id: 4,
    title: "Dirty Dancing",
    desc: "Romansidło",
    src: "https://eu.movieposter.com/posters/archive/main/66/MPW-33382",
    alt: "Dance"
  }
];




var App = React.createClass({
  render: function() {
    return React.createElement(
      "div",
      { className: "app" },
      React.createElement(Movie, { items: movies })
    );
  }
});

var Movie = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var movies = this.props.items.map(function(movie) {
      return React.createElement(MovieList, { key: movie.id, item: movie });
    });

    return React.createElement("div", { className: "moviesList" }, movies);
  }
});

var MovieList = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      "ul",
      { className: "movieItem" },
      React.createElement(MovieTitle, { item: this.props.item.title }),
      React.createElement(MovieDescription, { item: this.props.item.desc }),
      React.createElement(MovieImage, { item: this.props.item.src })
    );
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    item: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement(
      "h2",
      { className: "movieTitle" },
      "Tytuł: " + this.props.item
    );
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    item: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement(
      "p",
      { className: "movieDesc" },
      "Opis: " + this.props.item
    );
  }
});

var MovieImage = React.createClass({
  propTypes: {
    item: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement("img", {
      className: "movieImage",
      src: this.props.item,
      width: 80
    });
  }
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById("app"));

//////////ALTERNATYWNA OPCJA BEZ PODZIAŁU NA KOMPONENTY ODDZIELNIE

// //tworzyny klasę Movies z items jako lista wejścia
// var Movie = React.createClass({
//   propTypes: {
//     items: React.PropTypes.array.isRequired,
//   },

//   render: function() {
//     var movies = this.props.items.map(function(movie) {
//         return React.createElement(MovieItem, {key: movie.id,item: movie});
//     });

//     return (
//       React.createElement('ul', {className: 'moviesList'}, movies)
//     );
//   }
// });

// var MovieItem = React.createClass({
//   propTypes: {
//     item: React.PropTypes.object.isRequired,
//   },

//   render: function() {
//     return (
//       React.createElement('div', {className: 'movieItem'},
//         React.createElement('h2', {className: 'movieTitle'}, 'Tytuł: ' + this.props.item.title),
//         React.createElement('p', {className: 'movieDesc'}, 'Opis: ' + this.props.item.desc),
//         React.createElement('img', { className: 'movieImage', src: this.props.item.src, width: 80}),
//       )
//     )
//   },
// });

// var App = React.createClass({
//   render: function() {
//     return (
//       React.createElement('div', {className: 'app'},
//         React.createElement(Movie, {items: movies}, {})
//       )
//     );
//   }
// });

// var app = React.createElement(App);
// ReactDOM.render(app, document.getElementById('app'));
