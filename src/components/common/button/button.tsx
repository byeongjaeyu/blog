import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { EColor, Size } from '@defines/css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width? : Size;
    height? : Size;
    fontSize? : Size;
    variant? : 'contained' | 'outlined' | 'text';
    color? : 'inherit' | 'primary' | 'secondary' | 'tertiary';
    disabled? : boolean;
    isArrow? : boolean;
}

export function Button(props: ButtonProps) {
    const {
        children,
        disabled = false,
        height = 60,
        width = '100%',
        variant = 'text',
        type = 'button',
        isArrow = false,
        fontSize = 16,
        color = 'inherit',
        ...rest
    } = props
    
    return (
        <>
            <div className={classNames('button-container', disabled && 'disabled')}>
                <button {...rest} disabled={disabled} className={classNames(variant, color, isArrow && 'arrow')} type={type}>
                    <div className={'button-wrap'}>
                        <div className={'button-text'}>{children}</div>
                        {/* {isArrow && } */}
                    </div>
                </button>
            </div>
            <style jsx>
                {`
                    .button-container.disabled {
                        cursor: not-allowed;
                    }

                    button {
                        width: ${width};
                        height: ${height};
                        border-radius: 4px;
                        position: relative;
                        border: 0;
                        cursor: pointer;
                        align-items: center;
                        transition: 0.1s;
                    }
                    
                    .contained.primary {
                        background-color: ${EColor.PRIMARY_LIGHT};
                        color: ${EColor.PRIMARY_LIGHT};
                    }
                    button:hover.contained.primary {
                        background-color: ${EColor.PRIMARY_DARK};
                    }
                    button:active.contained.primary {
                        background-color: ${EColor.PRIMARY_MAIN};
                    }    
                `}
            </style>
        </>
    )
}