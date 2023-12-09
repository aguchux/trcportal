"use client"

import React from 'react'
import { IMAGES } from '@/config/images'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-menu default_bg">
                            <nav className="navbar navbar-expand-lg">
                                <div className="mobile_site_logo d-none">
                                    <Link href="/"><Image src={IMAGES.logoFooter} alt="logo" className="img-fluid" /></Link>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa fa-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="about.html">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="courses.html">Courses</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="result.html" className="nav-link">Result</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="notice.html" className="nav-link">Notice</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="contact.html" className="nav-link">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="#search_modal" data-toggle="modal" data-target="#search_modal" className="nav-link"><i className="fa fa-search" /></Link>
                                        </li>
                                    </ul>
                                    <div className="collapse-bar">
                                        <Link className="navbar-brand" data-toggle="collapse" href="#languages_options"><i className="fa fa-bars" /></Link>
                                        <div className="option-menu collapse" id="languages_options">
                                            <nav>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="#">English</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
