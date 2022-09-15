import React from "react";
import { GetServerSideProps } from "next";
import { PreviewTable } from "@components/blog/article/preview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { EColor } from "@defines/css";
import { useRouter } from "next/router";

export interface BlogMainProps {
    name: string,
    articles: {
        title: string,
        description: string,
        thumbnail: string,
        uploadDate: string,
    }[]
}

export default function BlogMain(props: BlogMainProps) {
    const router = useRouter();
    const { 
        name,
        articles,
    } = props
    return (
        <>
            <PreviewTable articles={articles}/>
            <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize:100, color:EColor.BLACK }}
                    onClick={() => {
                        router.push(`/blog/write/${name}`);
                    }}
            />
        </>
    )
};

export const getServerSideProps: GetServerSideProps = async(context) => {
    const { name } = context.query;
    // 이후 name에 대한 게시글 목록 불러오기
    // 이하는 샘플
    const articles = [
        {
            title: '1번 게시글',
            description: '햄스터 사진입니다.',
            thumbnail: 'https://t1.daumcdn.net/cfile/tistory/167B1F4050FE0C040A',
            uploadDate: '어제',
        },
        {
            title: '2번 게시글',
            description: '햄스터 사진입니다.',
            thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.Nl8pmiSYLYJsq1_FRW1VDwHaE8?pid=ImgDet&w=1050&h=700&rs=1',
            uploadDate: '어제',
        },
        {
            title: '3번 게시글',
            description: '햄스터 사진입니다.',
            thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.gDMqmrUfK3qf2OyJJqtj6AHaE8?pid=ImgDet&w=1050&h=700&rs=1',
            uploadDate: '어제',
        },
    ]
    return { props: {name, articles} }
}