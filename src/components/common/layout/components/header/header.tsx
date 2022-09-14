import React, {} from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { EColor } from '@defines/css';

interface HeaderProps {
    menuList?: string[],
    profileImg?: string,
    name?: string,
}

export function Header(props: HeaderProps) {
    const {
        menuList = ['bj'],
        profileImg,
        name,
    } = props
    return (
        <>
            <div className={classNames('header-wrapper')}>
                <img className={classNames('logo')}/>
                { menuList?.map((menu) => {
                    return (
                        <Link href={`/blog/main/${menu}`} key={menu}>
                            <a>{menu}</a>
                        </Link>
                    )
                }) }
                <img className={classNames(!profileImg && 'unknown')} src={profileImg ? profileImg : 'https://tse3.mm.bing.net/th/id/OIP.Ld3gVPutRBt6AAJlquDWAgHaIW?pid=ImgDet&rs=1'}/>
                <p>{name ? name : 'unknown'}반갑다</p>
            </div>
            <style jsx>
                {`
                    .header-wrapper {
                        width: 100%;
                        height: 60px;
                        display: flex;
                        background-color: ${EColor.WHITE};
                        border-bottom: 1px solid ${EColor.BLACK};
                    }

                    img {
                        height: 100%;
                        width: auto;
                    }

                    p {

                    }
                `}
            </style>
        </>
    )
}