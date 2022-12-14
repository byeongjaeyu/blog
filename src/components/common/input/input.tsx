import { EColor, Size } from '@defines/css'
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { Button } from '@components/common/button/button';
import classNames from 'classnames';
import { Icon } from '../icon/iconForm';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {useInput} from  './useInput';

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
    isSearchIcon?: boolean,
    width?: Size,
    height?: Size,
    fontSize?: Size,
    label?: string,
    disabled?: boolean,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    buttonWidth?: Size,
    buttonHeight?: Size,
    buttonFontSize? : Size;
    buttonVariant? : 'contained' | 'outlined' | 'text';
    buttonColor? : 'inherit' | 'primary' | 'secondary' | 'tertiary';
    buttonDisabled? : boolean;
    buttonIsArrow? : boolean;
    buttonChildren?: string;
    onButtonClick?: (value?: string) => void;
}


export function Input(props: Inputprops) {
    const {
        isSearchIcon,
        width = "200px",
        height = "60px",
        label,
        placeholder,
        disabled,
        value,
        type,
        buttonWidth = "100px",
        buttonHeight = "20px",
        buttonFontSize,
        buttonVariant,
        buttonColor,
        buttonDisabled,
        buttonChildren = "검색버튼",
        onButtonClick,
        ...rest        
    } = props;

    const {inputValue, setInputValue}  = useInput();
    return (
        <>
            <div className={classNames('input-wrapper')}>
                <label className={classNames('input-box')}>
                    {
                        isSearchIcon && 
                        <Icon
                            icon={faMagnifyingGlass}
                            width="10px"
                            height="10px"
                        />
                    }
                    <input
                        {...rest}
                        disabled={disabled}
                        placeholder={placeholder}
                        type={type}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <Button
                        width={buttonWidth}
                        height={buttonHeight}
                        fontSize={buttonFontSize}
                        variant={buttonVariant}
                        color={buttonColor}
                        disabled={buttonDisabled}
                        children={buttonChildren}    
                        onClick={() => onButtonClick?.(inputValue)}     
                    />
                </label>
            </div>
            {/* 양식 작업하자! */}
            <style jsx>
                {`
                    .input-box {
                        border: 1px solid ${EColor.BLACK};
                        display: flex;
                        align-items: center;
                        background: ${EColor.WHITE}
                    }
                    .input-wrapper {
                        width: ${width};
                        height: ${height};
                    }

                    .label {
                        line-height: 24px;
                    }

                    .input-box {
                        width: 100%;
                        position: relative;
                        display: flex;
                    }

                    input {
                        width: 100%;
                        height: 100%;
                        outline: none;
                        background: ${EColor.WHITE};
                        border: none;
                        padding: 2px 5px;
                    }
                `}
            </style>
        </>
    )
}
