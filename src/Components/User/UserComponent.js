import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
export default function User({ getUsers, userData, addUser, deleteUser }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  const _onSubmit = (values, { resetForm }) => {
    addUser(values.userName);
    resetForm();
  };
  const addContractSchema = Yup.object().shape({
    userName: Yup.string()
      .trim()
      .required("champ vide")
      .min(3, "min 3 character"),
  });
  return (
    <Formik
      initialValues={{
        userName: "",
      }}
      onSubmit={_onSubmit}
      validationSchema={addContractSchema}
      enableReinitialize={true}
      initialErrors={{}}
    >
      {({
        handleChange,
        values,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        isValid,
      }) => (
        <ul>
          <li>
            <input
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type="button"
              value="add user"
              onClick={handleSubmit}
              disabled={!isValid}
            />
            {touched.userName && errors.userName}
          </li>
          {userData.map((user) => (
            <li key={user.id}>
              {user.name}{" "}
              <input
                type="button"
                value="DELETE"
                onClick={() => deleteUser(user.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </Formik>
  );
}
