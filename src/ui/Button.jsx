import { ButtonStyle } from './style';

const Button = ({ text = '확인', bgColor, textColor, width, onClick = () => {} }) => {
    return (
        <ButtonStyle bgColor={bgColor} textColor={textColor} width={width} onClick={onClick}>
            {text}
        </ButtonStyle>
    );
};

export default Button;
