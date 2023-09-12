import * as yup from 'yup'
export const schemaForLogin = yup.object().shape({
    email : yup.string().required("this field is required"),
    password : yup.string().min(8,"must be more than 8 charcter").required("this field is required")
})
export const schemaForSignUp = yup.object().shape({
    name : yup.string().required("this field is required"),
    password : yup.string().min(8,"must be more than 8 charcter").required("this field is required"),
    email    : yup.string().matches(/[a-zA-Z0-9\_\.]+(@gmail\.com)$/ , "its not a valid email").required("this field is required"),
    ssn : yup.string().matches(/^0(\d{10})$/,"should be a right id-number").required("this field is required")
})