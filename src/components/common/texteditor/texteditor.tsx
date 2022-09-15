import React, { useState, useEffect, useRef } from 'react';

interface TexteditorProps {
    ReadOnly?: boolean,
    onChange?: (event: Event, editor: any) => void,
    onBlur?: (event: Event, editor: any) => void,
    onFocus?: (event: Event, editor: any) => void,
}

export const Editor = (props: TexteditorProps) => {
    const editorRef:any = useRef();
    const {CKEditor, ClassicEditor} = editorRef.current || {};
    const [editorLoaded, setEditorLoaded] = useState(false);
    const {
        onChange,
        onBlur,
        onFocus,
    } = props
    useEffect(()=>{
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        }
        setEditorLoaded(true);
    },[])
    return (
        editorLoaded ? 
        <CKEditor
            // config={[]}
            editor={ClassicEditor}
            data="<p>hi</p>"
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
        />
        : 
        <div>loading...</div>
    )
  }
