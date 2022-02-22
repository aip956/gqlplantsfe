import { useQuery, gql } from '@apollo/client';
const getAll = gql`
{
getAll{
  name 
  type
  image
  }
}
`;


function App() {
  const{loading, error, data}=useQuery(getAll)
if(loading) return "Loading"
if(error) return "Error"
  return (
    <div className="App">
      {
        data.getAll.map((data) => (
          <p>
            {data.name}:{data.type}
            Image: {data.image}
          </p>
        ))};
    </div>
  );
}

export default App;
