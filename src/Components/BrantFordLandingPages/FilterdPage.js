import React from 'react'
import HocLandingPage from '../HocLandingPage'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FilterdPage = () => {
    const onChange = () => {

    }
    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-lg-3 col-sm-12 col-md-3 py-2">
                    <div className="filetred-card card shadow px-3 py-3" style={{ borderRadius: "10px" }}>
                        <div className="header-section d-flex align-items-center justify-content-between ">
                            <p className='fw-bold'>Applied filter</p>
                            <p>claer All</p>
                        </div>
                        <div className="filterd-bugdet-section  d-flex align-items-center justify-content-between ">
                            <p className='fw-bold'>Budget</p>
                            <p>claer </p>
                        </div>
                        <div className="filterd-property-type-section  d-flex align-items-center justify-content-between ">
                            <p className='fw-bold'>Proprty type</p>
                            <p>claer </p>
                        </div>
                        <div className="filterd-Amenities-section  d-flex align-items-center justify-content-between ">
                            <p className='fw-bold'>Amenity</p>
                            <p>claer </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="filterd-heading px-3 py-3">

                                <h3>12841 results |Residential land / Plots in Uttar Pradesh for Sale Below 2800 sq.ft.</h3>
                            </div>

                        </div>
                        <div className="col-12 w-100">
                            <div className="filterd-sorting d-flex justify-content-between align-items-center">
                                <div className=''>
                                    <button className='btn-first'>
                                        coorking type
                                    </button>
                                </div>
                                <div className="sort position-relative">

                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Sort
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">label</div>
                                                <div class="accordion-body">Low to Hight</div>
                                                <div class="accordion-body">High to Low</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HocLandingPage(FilterdPage)