import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import App from './components/app.jsx';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,
     root);
}




// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="World" />, root);
// }
