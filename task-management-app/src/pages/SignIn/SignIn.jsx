// SignIn.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../Context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import './SignIn.css';

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate(); // Create a history object

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      const dummyUsers = [
        { email: 'user1@example.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' },
      ];

      const user = dummyUsers.find((u) => u.email === values.email && u.password === values.password);

      if (user) {
        signIn();
        alert('Login successful!');
      } else {
        alert('Invalid email or password');
      }
    },
  });

  return (
    <div className="Division">
      <h2>Sign In</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
