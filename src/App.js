import { useFormik } from "formik";
import * as Yup from "yup";

export default function App() {
  const schema = Yup.object().shape({
    name: Yup.string().required()
  });

  const form = useFormik({
    initialValues: { name: "" 
   },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema
  });
  const { values, handleChange, handleSubmit, errors} = form;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">name</label>
        <input value={values.name} onChange={handleChange} name="name"/>
        {errors.name ? errors.name : null}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
    
  );
}
