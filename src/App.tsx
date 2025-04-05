import Component from "./starter/02-props";

function App() {
	return (
		<main>
      <Component name='test' id={1} >
        <h2>Hello world</h2>
      </Component>
      <Component name='test' id={2}/> 
		</main>
	);
}

export default App;
