import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Please, type a valid e-mail!").required("The e-mail is required!"),
})


