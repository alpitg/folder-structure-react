```
import {useState} from 'react';

export default function App() {
  const initialState = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bob', country: 'Belgium'},
  ];

  const [employees, setEmployees] = useState(initialState);

  // ✅ Add an object to a state array
  const addObjectToArray = obj => {
    setEmployees(current => [...current, obj]);
  };

  // ✅ Update one or more objects in a state array
  const updateObjectInArray = () => {
    setEmployees(current =>
      current.map(obj => {
        if (obj.id === 2) {
          return {...obj, name: 'Sophia', country: 'Sweden'};
        }

        return obj;
      }),
    );
  };

  // ✅ Remove one or more objects from state array
  const removeObjectFromArray = () => {
    setEmployees(current =>
      current.filter(obj => {
        return obj.id !== 2;
      }),
    );
  };

  return (
    <div>
      <button
        onClick={() =>
          addObjectToArray({
            id: Math.random(),
            name: 'Carl',
            country: 'Canada',
          })
        }
      >
        Add employee
      </button>

      <button onClick={updateObjectInArray}>Update object in array</button>

      <button onClick={removeObjectFromArray}>Remove object from array</button>

      {employees.map(employee => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
```
