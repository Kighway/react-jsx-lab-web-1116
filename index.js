const React = require('react');
const ReactDOM = require('react-dom');

const RegistrationForm = require('./components/RegistrationForm.js');
const Webpage = require('./components/Webpage.js');

ReactDOM.render(
  (
    <div>
      <RegistrationForm />
      <Webpage />
    </div>
  ),
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
