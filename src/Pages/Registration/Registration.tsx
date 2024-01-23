import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

const initialValues = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

const Registration: React.FC = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <div className="container mx-auto py-32">
        <h3 className="text-center text-4xl font-bold mb-16">
          Please Registration
        </h3>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="card-body border rounded-lg w-3/4 2xl:w-3/5 mx-auto">
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Email</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="email"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Name</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="name"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Password</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="password"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Confirm Password</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="confirmPassword"
                  component="div"
                />
              </div>
              <label className="label font-semibold">
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link
                      className="register-link text-blue-700 hover:font-bold"
                      to="/login"
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </label>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#EA062B] text-white hover:bg-[#EA062B]"
                >
                  Registration
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;
