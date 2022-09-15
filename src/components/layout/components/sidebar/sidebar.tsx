import { EColor } from "@defines/css";

export function Sidebar() {
    return (
        <>
            <div className="sidebar-wrapper">
                <a className="sidebar-title">타이틀</a>
                <a className="sidebar-link">링크</a>
                <a className="sidebar-link">링크2</a>
                <a className="sidebar-link">링크3</a>
                <a className="sidebar-end">마침말</a>
            </div>
            <style jsx>
                {`
                    .sidebar-wrapper {
                        position: fixed;
                        left: 0;
                        display: flex;
                        justify-content: space-around;
                        flex-direction: column;
                        background: ${EColor.INFO_LIGHT};
                    }

                    .sidebar-wrapper a {
                        font-size: 16px;
                        color: #fff;
                        text-decoration: none;
                        padding: 20px;
                        text-align: center;
                    }
                `}
            </style>
        </>
    )
}