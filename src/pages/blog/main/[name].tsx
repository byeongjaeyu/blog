import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface BlogMainProps {
    articles: {
        title: string,
        thumbnail: string,
        uploadDate: string,
    }[]
}

export default function BlogMain(props: BlogMainProps) {
    console.log(props);
    return (
        <>
            목록들
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
            thumbnail: 'https://t1.daumcdn.net/cfile/tistory/167B1F4050FE0C040A',
            uploadDate: '어제',
        },
        {
            title: '2번 게시글',
            thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.Nl8pmiSYLYJsq1_FRW1VDwHaE8?pid=ImgDet&w=1050&h=700&rs=1',
            uploadDate: '어제',
        },
        {
            title: '3번 게시글',
            thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.gDMqmrUfK3qf2OyJJqtj6AHaE8?pid=ImgDet&w=1050&h=700&rs=1',
            uploadDate: '어제',
        },
    ]
    return { props: {articles} }
}