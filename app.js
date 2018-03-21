// var GroceryList = () => (
// 	<ul>
// 	  <li>Kale</li>
// 	  <li>Cucumbers</li>
// 	</ul>
// );

var GroceryList = () => (
	<ul>
    <Kale />
    <Cucumbers />
  </ul>
);

var Kale = () => (
    <li>kale</li>
);

var Cucumbers = () => (
    <li>cucumbers</li>
);

  	ReactDOM.render(<GroceryList />, document.getElementById('app'));
  	ReactDOM.render(<Kale />, document.getElementById('ul'));
  	ReactDOM.render(<Cucumbers />, document.getElementById('ul'));
  	