import React, {useState} from 'react'
import Input from '../Elements/Input'
import Button from '../Elements/Button'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import AppSnackbar from '../Elements/AppSnackbar'
import { registerService } from '../../services/authService'

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Username wajib diisi'),
  email: Yup.string().email('Email tidak valid').required('Email wajib diisi'),
  password: Yup.string().min(6,'Password minimal 6 karakter').required('Password wajib diisi'),
  confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Password tidak cocok').required('Konfirmasi password wajib diisi')
});

function FormSignUp() {
    const [snackbar, setSnackbar] = useState({open:false,message:'',severity:'success'});

    const handleCloseSnackbar = () => {
      setSnackbar({...snackbar, open:false});
    }

    return (
        <>
            {/* form start */}
            <div className="mt-16">
                <Formik
                  initialValues={{ username:'', email:'', password:'', confirm_password:'' }}
                  validationSchema={SignUpSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                      const res = await registerService(values.username, values.email, values.password);
                      // API in exercise returns success even if not creating real account
                      setSnackbar({open:true, message: res?.msg || 'Register sukses', severity:'success'});
                      resetForm();
                    } catch (err) {
                      const message = err?.msg || err?.message || 'Terjadi kesalahan';
                      setSnackbar({open:true, message: message, severity:'error'});
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-6">
                          <Field name="username">
                            {({ field }) => <Input {...field} id="username" placeholder="Username" />}
                          </Field>
                          <div className="text-red-500 text-sm mt-1"><ErrorMessage name="username" /></div>
                      </div>

                      <div className="mb-6">
                          <Field name="email">
                            {({ field }) => <Input {...field} id="email" placeholder="Email" />}
                          </Field>
                          <div className="text-red-500 text-sm mt-1"><ErrorMessage name="email" /></div>
                      </div>

                      <div className="mb-6">
                          <Field name="password">
                            {({ field }) => <Input {...field} id="password" type="password" placeholder="Password" />}
                          </Field>
                          <div className="text-red-500 text-sm mt-1"><ErrorMessage name="password" /></div>
                      </div>

                      <div className="mb-6">
                          <Field name="confirm_password">
                            {({ field }) => <Input {...field} id="confirm_password" type="password" placeholder="Confirm Password" />}
                          </Field>
                          <div className="text-red-500 text-sm mt-1"><ErrorMessage name="confirm_password" /></div>
                      </div>

                      <div className="mb-6">
                          <Button type="submit">
                            {isSubmitting ? 'Loading..' : 'Create account'}
                          </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
            </div>
            {/* sign in with google end */}
            {/* link start */}
            <div className="flex justify-center">
                Already have an account? 
                <Link to="/login" className="text-primary text-sm font-bold"> log in here!</Link>
            </div>
            {/* link end */}

            <AppSnackbar
              open={snackbar.open}
              message={snackbar.message}
              severity={snackbar.severity}
              onClose={handleCloseSnackbar}
            />
        </>
    )
}

export default FormSignUp
