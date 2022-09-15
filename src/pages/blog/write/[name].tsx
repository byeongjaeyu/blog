import dynamic from 'next/dynamic';
import React from 'react';
import {Editor} from '@components/common/texteditor/texteditor';

interface WriteProps {

}


export default function Write(props: WriteProps) {
    return (
        <>
            <p>글을 써보자</p>
            <Editor/>
        </>
    )
}