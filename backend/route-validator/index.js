const { Validator } = require('jsonschema');
const v = new Validator();
function loginValidator(req, res, next) {
    try {
        const schema = {
            id: '/login',
            type: 'object',
            properties: {
                contact: { type: 'string' },
                password: { type: 'string' }
            },
            required: ['contact', 'password']
        };
        const isValid = v.validate(req.body, schema, { allowUnknownAttributes: false });
        if (!isValid.errors.length) next();
        else {
            const error = isValid.errors[0];
            res.status(400).json({ status: 'Bad Request', message: `${error.property} ${error.message}` });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    loginValidator
}
