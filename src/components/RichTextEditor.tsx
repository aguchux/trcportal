
import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


interface RichTextEditorProps {
    page: PageProps,
    onChageFunction: (event: any, editor: any) => void
}

export default function RichTextEditor(props:RichTextEditorProps) {
    const { page, onChageFunction } = props;
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                data={`${page.content!}`}
                config={
                    {
                        ckfinder: {
                            uploadUrl: '/api/upload'
                        }
                    }
                }
                onChange={onChageFunction}
            />
        </>
    )
}
