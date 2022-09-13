import React, {} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface TexteditorProps {
    onChange?: (event: Event, editor: any) => void,
    onBlur?: (event: Event, editor: any) => void,
    onFocus?: (event: Event, editor: any) => void,
}

export function Texteditor(props: TexteditorProps) {
    const {
        onChange,
        onBlur,
        onFocus
    } = props
    return (
        <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        />
    )
}