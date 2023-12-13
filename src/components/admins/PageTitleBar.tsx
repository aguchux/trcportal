import React from 'react'
import { BeatLoader } from 'react-spinners'

type Props = {
    title: string
    loading: boolean
}
const PageTitleBar = ({ title ="Dashboard", loading = false }: Props) => {
    return (
        <>
            <h3 className="trc-flex-rows trc-justify-items-end trc-items-stretch">
                <strong>{title}</strong>
                <span className="trc-float-right">{loading && <BeatLoader color="#91c73d" />}</span>
            </h3>
            <hr className='trc-clear-both trc-border trc-h-2 trc-border-y-pink-800 trc-font-bold' />
        </>
    )
}

export default PageTitleBar
