import Joi from "joi";

/**
 * @HELPER
 * @type object
 * @desc schema that defines custom Error Messages
 *
 **/
const customErrorMessages = {
    "string.base": "The {#label} field must be a valid string,{#label}",
    "string.pattern.base": "Password cannot conStain spaces,{#label}",
    "string.min":
        "The {#label} field must be at least {#limit} characters long,{#label}",
    "string.max":
        "The {#label} field must not exceed {#limit} characters.,{#label}",
    "string.email": "The email address is not valid.,{#label}",
    "any.required": "The {#label} field is required.,{#label}",
    "string.empty": "the {#label} Field cannot be empty,{#label}",
    "number.base": "The {#label} field must be a valid id.,{#label}"
};

/**
 * @HELPER
 * @type object
 * @desc schemas for validating the request body when creating and updating
 *
 **/

/**
 * @Post
 */
const PostSchema = Joi.object({
    title: Joi.string().required().messages(customErrorMessages),
    message: Joi.string().required().messages(customErrorMessages),
    creator: Joi.string().required().messages(customErrorMessages),
    image: Joi.string().required().messages(customErrorMessages),
    tags: Joi.string().required().messages(customErrorMessages)
});

/**
 * @Post
 */
const UserSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .required()
        .messages(customErrorMessages)
        .label("First Name"),
    lastName: Joi.string()
        .trim()
        .required()
        .messages(customErrorMessages)
        .label("Last Name"),
    email: Joi.string()
        .email()
        .trim()
        .required()
        .messages(customErrorMessages)
        .label("Email"),
    password: Joi.string()
        .min(8)
        .required()
        .messages(customErrorMessages)
        .label("Password")
});

/**
 * @HELPER
 * @type function
 * @params req.body :  object
 * @desc function that take object req.body and sanitize it
 * @returns object include sanitized data from the req.body
 **/

const sanitizer = (data) => {
    if (typeof data !== "object" || Object.keys(data).length === 0) {
        throw new Error("Please provide a non-empty object for sanitization.");
    }
    const SanitizedData = {};
    Object.keys(data).forEach((key) => {
        SanitizedData[key] = data[key].customTrim();
    });
    return SanitizedData;
};

/**
 * @HELPER
 * @type function
 * @params schema
 * @params req.body object
 * @desc function validate sheama either return message or null , takes two parameter schema and req.body object
 **/
const validator = (schema, data) => {
    const { error } = schema.validate(data);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        throw new Error(errors);
    }
};

export { PostSchema, validator, sanitizer };
