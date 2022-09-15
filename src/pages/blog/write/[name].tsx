import dynamic from 'next/dynamic';
import React from 'react';
import {Editor} from '@components/common/texteditor/texteditor';
import { Input } from '@components/common/input/input';

interface WriteProps {

}


export default function Write(props: WriteProps) {
    return (
        <>
            <p>글을 써보자</p>
            <Input isSearchIcon={true} />
            <Editor/>
        </>
    )
}