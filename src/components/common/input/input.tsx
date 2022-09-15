import { EColor, Size } from '@defines/css'
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { Button } from '@components/common/button/button';
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
        ...rest        
    } = props
    return (
        <>
            <div className={classNames('input-wrapper')}>
                <label className={classNames('input-box')}>
                    {
                        isSearchIcon && 
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            style={{ width:'10px', height:'10px' }}
                        />
                    }
                    <input
                        {...rest}
                        disabled={disabled}
                        placeholder={placeholder}
                        type={type}
                    />
                    <Button
                        width={buttonWidth}
                        height={buttonHeight}
                        fontSize={buttonFontSize}
                        variant={buttonVariant}
                        color={buttonColor}
                        disabled={buttonDisabled}
                        children={buttonChildren}                
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
