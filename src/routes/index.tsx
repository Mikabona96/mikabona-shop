import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Category } from '../components/category';
import { Item } from '../components/item';
import { Registration } from '../pages/Auth';
import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';

const Routes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/registration", element: <Registration /> },
      { path: `/${'men'}`, element: <Shop /> },
      { path: `/${'women'}`, element: <Shop /> },
      { path: `/${'men'}/:category`, element: <Category /> },
      { path: `/${'women'}/:category`, element: <Category /> },
      { path: `/${'men'}/:category/:item`, element: <Item /> },
      { path: `/${'women'}/:category/:item`, element: <Item /> },
      // ...
    ]);
    return routes;
  };

function Routing(props: any) {

    return (
      <Router>
          {props.children[0]}
          <Routes />
          {props.children[1]}
      </Router>
    );
  }
  
  export default Routing;