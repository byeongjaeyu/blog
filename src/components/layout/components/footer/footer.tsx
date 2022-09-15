import React, {} from 'react';
import classNames from 'classnames';
import { EColor } from '@defines/css';

export function Footer() {
    return (
        <>
            <div className={classNames('footer-wrapper')}>
                <img className={classNames('logo')}/>
                footer
            </div>
            <style jsx>
                {`
                    .footer-wrapper {
                        width: 100%;
                        height: 60px;
                        display: flex;
                        background-color: ${EColor.WHITE};
                        border-top: 1px solid ${EColor.BLACK};
                    }
                `}
            </style>
        </>
    )
}