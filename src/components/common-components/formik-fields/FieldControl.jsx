import { isFunction } from 'lodash';
import { Form } from 'react-bootstrap';

export const FieldControl = ({
  field: { name, value, onChange: formikOnChange, onBlur: formikOnBlur },
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const {
    label,
    classes = '',
    helpText = '',
    onChnage: userOnBlur,
    onBlur: userOnChange,
    type = 'text',
    ...restProps
  } = props;

  const asTypes = ['textarea'];

  if (asTypes.includes(type)) {
    restProps['as'] = type;
  } else {
    restProps['type'] = type;
  }

  return (
    <Form.Group className={`mb-3 ${classes}`}>
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
      <Form.Control
        name={name}
        value={value}
        id={name}
        onChange={(e) => {
          formikOnChange(e);
          isFunction(userOnChange) && userOnChange(e);
        }}
        onBlur={(e) => {
          formikOnBlur(e);
          isFunction(userOnBlur) && userOnBlur(e);
        }}
        isInvalid={touched[name] && errors[name]}
        {...restProps}
      />
      {helpText && <Form.Text>{helpText}</Form.Text>}
      {touched[name] && errors[name] && (
        <Form.Text className="text-danger">{errors[name]}</Form.Text>
      )}
    </Form.Group>
  );
};
