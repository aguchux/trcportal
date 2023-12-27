
import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PageAttrs } from '@/models/pages.model';


interface RichTextEditorProps {
    page: PageAttrs,
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
                            uploadUrl: '/api/images/upload',
                            options: {
                                resourceType: 'Images',
                                extension: 'jpg|jpeg|png|gif|svg',
                                multiple: true,
                            }
                        }
                    }
                }
                onChange={onChageFunction}
            />
        </>
    )
}
