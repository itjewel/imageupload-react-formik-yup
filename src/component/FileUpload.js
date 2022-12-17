
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState} from 'react';
import PictureInput from './PictureInput';

 const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [catName, setCatName] = useState('');


    const SignupSchema = Yup.object().shape({
        category_name: Yup.string().required("Please enter category name."),
        cat_image: Yup.mixed().required('Please choose category file')
        
    });

    const initialValues = {
        category_name: '',
        cat_image: undefined,
    }
    

    const handleFileSelect = (event) => {
        // console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }
   
    // form submit method 
  const onSubmit =  async (data) =>{
    console.log(data)
    //  data.append('cat_image', image)
   
  }
  return (
    <>
    <Formik initialValues={initialValues} validationSchema={SignupSchema}  onSubmit={onSubmit}>
    {({ errors, touched }) => (
            <Form autoComplete="off">
        <div className="modal-content">
           
            <div className="modal-body m-3">
                <div className="col-12 col-xl-12">                              
                    
                        <div className="form-group">
                            <label className="form-label">Category Name</label>
                            <Field type="text" name="category_name" className="form-control input-lg" placeholder="Category Name" />
                            <div className='text-danger'> {errors.category_name && touched.category_name ? (
                                <div>{errors.category_name}</div>
                            ) : null}</div>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label w-100">Category Picture</label>
                            {/* <Field type="file" name="cat_image"  onChange={(e)=>setSelectedFile(e.target.files[0])}/> */}
                            <Field name="image" component={PictureInput} />
                            <div className='text-danger'> {errors.cat_image && touched.cat_image ? (
                                <div>{errors.cat_image}</div>
                            ) : null}</div>
                           
                        </div>                                    
                    
                </div>
                <button type="submit" className="btn btn-primary">Save Information</button>
                
            </div>
               
        </div>
        </Form>
            )}
        </Formik>
    </>
  )
}
export default FileUpload;
