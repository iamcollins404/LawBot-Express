import React from 'react'
import { Text } from '@nextui-org/react'
import { Modal } from "@nextui-org/react";

function Index() {
    const [showModal, setShowModal] = React.useState(false)

    function closeHandler(params) {
        setShowModal(false)
    }

    return (
        <div className="findPatientBtn">
            <form onSubmit={(e) => e.preventDefault()} className="mt-28">
                <div className="text-center mb-16">
                    <h5 className="patientSearchText">
                        GENERATE LEGAL DOCUMENT
                    </h5>
                </div>

                <div className="relative my-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                    <select
                        className="searchForm w-full py-6 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    >
                        <option value="" disabled selected>Select a legal document type...</option>
                        <option value="contract">Contract</option>
                        <option value="agreement">Agreement</option>
                        <option value="will">Will</option>
                        <option value="deed">Deed</option>
                        <option value="lease">Lease Agreement</option>
                        <option value="powerOfAttorney">Power of Attorney</option>
                        <option value="promissoryNote">Promissory Note</option>
                        <option value="employmentContract">Employment Contract</option>
                        <option value="partnershipAgreement">Partnership Agreement</option>
                        <option value="nonDisclosureAgreement">Non-Disclosure Agreement</option>
                        <option value="purchaseAgreement">Purchase Agreement</option>
                        <option value="rentalAgreement">Rental Agreement</option>
                        <option value="loanAgreement">Loan Agreement</option>
                        <option value="lastWillAndTestament">Last Will and Testament</option>
                        <option value="divorceAgreement">Divorce Agreement</option>
                        <option value="propertyDeed">Property Deed</option>
                        <option value="employmentOfferLetter">Employment Offer Letter</option>
                        <option value="billOfSale">Bill of Sale</option>
                        <option value="contractorAgreement">Contractor Agreement</option>
                        <option value="confidentialityAgreement">Confidentiality Agreement</option>
                        <option value="serviceContract">Service Contract</option>
                        <option value="leaseTerminationLetter">Lease Termination Letter</option>
                        <option value="premaritalAgreement">Premarital Agreement</option>
                        <option value="warrantyDeed">Warranty Deed</option>
                        <option value="subleaseAgreement">Sublease Agreement</option>
                        <option value="employmentTerminationLetter">Employment Termination Letter</option>
                        <option value="purchaseOrder">Purchase Order</option>
                        <option value="separationAgreement">Separation Agreement</option>
                        <option value="nonCompeteAgreement">Non-Compete Agreement</option>
                    </select>
                </div>

                <div>
                    <div>
                        <button onClick={() => { setShowModal(true) }} type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-600 border 
                        border-transparent rounded-md focus:outline-none hover:bg-gray-700 focus:bg-gray-700">
                            GENERATE NOW
                        </button>
                    </div>

                    <Modal
                        aria-labelledby="modal-title"
                        open={showModal}
                        onClose={closeHandler}
                        className='border border-pink-00'
                    >
                        <Modal.Body>
                            <div className="relative w-full max-w-md mx-auto overflow-hidden bg-white rounded-xl">
                                <div className="absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button"
                                        className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                                        <span className="sr-only">
                                            Close
                                        </span>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">
                                            </path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-8">
                                    <div className="text-center">
                                        <svg className="w-10 h-10 mx-auto text-gray-900 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>

                                        <p className="mt-8 text-xl font-bold text-gray-900">
                                            Generating Document
                                        </p>
                                        <p className="mt-3 text-base font-medium text-gray-600">
                                            This can take a few minutes depending on your network. Don’t leave this page. Hang on while we generate the Document.
                                        </p>
                                        <div className="mt-8">
                                            <button type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white">
                                                Download Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>

                <div className="statsText mt-24">
                    <Text b h1 size={30} className='flex justify-center items-center'>
                        Create Legal Document
                    </Text>
                    <Text size="$md" className='flex justify-center items-center '>
                        #Together We Can Make a Legal Difference
                    </Text>
                </div>
            </form>
        </div>
    )
}

export default Index
