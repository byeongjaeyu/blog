import { EColor } from "@defines/css";
import { BlogMainProps } from "@pages/blog/main/[name]"
import classNames from "classnames";

type PrecviewTableProps = Omit<BlogMainProps, "name">

export function PreviewTable(props: PrecviewTableProps) {
    const {
        articles
    } = props;
    return (
        <>
            <div className={classNames('preview-table-wrapper')}>
                {
                    articles.map(({title, description, uploadDate, thumbnail}) => {
                        return (
                            // key 유니크한 값 다시 생각해보기.
                            <div key={title} className={'article'}>
                                <div className="content">
                                    <div className="title">
                                        {title}
                                    </div>
                                    <div className="description">
                                        {description}
                                    </div>
                                </div>
                                <img className="thumbnail" src={thumbnail} />
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>
                {`
                    .article{
                        width: 100%;
                        height: 100px;
                        display: flex;
                        border-bottom: 1px solid ${EColor.BLACK};
                    }

                    .article > .thumbnail {
                        height: 70%;
                        width: auto;
                    }
                `}
            </style>
        </>
    )
}