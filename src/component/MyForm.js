import React from "react";
import { Formik, Form } from "formik";
import * as yup from 'yup';
import { FileInput, ImageInput } from "formik-file-and-image-input/lib";

const CustomFileInputWrapper = ({onClick, fileName}) => {
    return (
        <div>
            <button onClick={onClick}>Choose File</button>
            <p>{fileName}</p>
        </div>
    )
}

const CustomImageInputWrapper = ({onClick, fileName, src}) => {
    return (
        <div onClick={onClick}>
            {!src && <button onClick={onClick}>Choose Image</button>}
            <img src={src} />
            <p>{fileName}</p>
        </div>
    )
}

export default function MyForm() {
	const fileFormats = ["application/pdf"];
	const imageFormats = ["image/png", "image/svg", "image/jpeg"];
	const initialValues = {
		file: null,
		image: null,
	};

	const validationSchema = yup.object().shape({
		file: yup.mixed().required(),
		image: yup.mixed().required(),
	});

    const handleSubmit = (data)=>{
        console.log(data)
    }

	return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
			<Form>
                
                <ImageInput
                    name="image"
                    validFormats={imageFormats}
                    type="file"
                />
                <button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}