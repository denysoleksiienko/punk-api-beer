import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { BEERS } from '../../constants/pathnames';
import './Login.scss';

export const Login = ({ login }) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Should be 6 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }),
    onSubmit: () => {
      login();
      history.push(BEERS);
    },
  });

  return (
    <div className="form">
      <form className="form-login" onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          className="form-input"
          label="Email"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps('email')}
        />

        <TextField
          className="form-input"
          label="Password"
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password && formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
          {...formik.getFieldProps('password')}
        />

        <Button className="btn btn-login" variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
