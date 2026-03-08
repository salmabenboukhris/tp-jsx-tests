import DataLoader from "./DataLoader";

function App() {
  return (
    <div>

      <h1>TP JSX et Composition</h1>

      <DataLoader
        render={(data) => (
          <ul>
            {data.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      />

    </div>
  );
}

export default App;
//render est une fonction qui reçoit data et retourne du JSX.
//Ce pattern rend le composant flexible