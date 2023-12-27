
import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


interface RichEditorProps {
    content: string,
    onChageFunction: (event: any, editor: any) => void
}

export default function RichEditor(props: RichEditorProps) {
    const { content, onChageFunction } = props;
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                data={`${content!}`}
                config={
                    {
                        ckfinder: {
                            uploadUrl: '/api/images/upload'
                        }
                    }
                }
                onChange={onChageFunction}
            />
        </>
    )
}
