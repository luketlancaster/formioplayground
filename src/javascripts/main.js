import 'formiojs/dist/formio.form';
import 'formiojs/dist/formio.form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import formDef from './form.json';

// eslint-disable-next-line no-undef
Formio.createForm(document.getElementById('form'), formDef).then(form => {
  form.nosubmit = true;
});
