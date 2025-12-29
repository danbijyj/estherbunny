import { InputStyle } from './style';

const Input = ({ value, onChange, placeholder = '', width, bgColor, textColor }) => {
    return (
        <InputStyle
            type='text'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            width={width}
            bgColor={bgColor}
            textColor={textColor}
        />
    );
};

export default Input;
