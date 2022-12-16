// import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import paints from './mocks/paints.json';

// const props = {
//   name: 'Mike',
//   phone: '111-111-1111',
//   email: 'mike@email.com',
//   image: {
//     url: 'https://images.unsplash.com/photo-1536849460588-696219a9e98d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80',
//     alt: 'Mike paint xxxx',
//   },
//   favoured: false,
// };

function App() {
  // return <Card {...props} />;
  return <Cards paints={paints} />;
}

export default App;
