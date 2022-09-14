import React, { useState, useEffect, useRef } from 'react';

interface TexteditorProps {
    onChange?: (event: Event, editor: any) => void,
    onBlur?: (event: Event, editor: any) => void,
    onFocus?: (event: Event, editor: any) => void,
    editorLoaded : boolean
}

export function Texteditor(props: TexteditorProps) {
    const editorRef = useRef<any>();
    const { CKEditor, ClassicEditor } = editorRef.current || {};
    useEffect(()=>{
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, 
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    },[])
    const {
        onChange,
        onBlur,
        onFocus,
        editorLoaded
    } = props
    return (
        <>
            {
                editorLoaded ? 
                <CKEditor
                editor={ClassicEditor}
                data="<p>hi</p>"
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                />
                :
                <div>loading...</div>
            }
        </>
    )
};