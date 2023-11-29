import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({

    //Validación Full Name
    fullName: Yup.string().required('Full Name is Required'),
    
    //Validación Email
    email: Yup.string()
    .email("Enter a valid mail")
    .required("The e-mail is Required"),
    
    //Validación PassWord
    password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/, 
    "Password is not valid (lower, upper, nums, symbols)")
    .required('Password is Required'),
    
    //Validación Confirm
    confirm: Yup.string()
    .oneOf([Yup.ref("password"),
    null],
    "Password must match")
    .required("Confirmation is Required"), 
    
    //Validación Select
    framework: Yup.string().oneOf([
        "react", "vue", "angular"
    ], 
    "Must select a framework")
    .required("The framework is required"),

    //Validación Terms
    terms: Yup.bool().oneOf([true], "You must accept the terms")

});