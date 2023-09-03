import React from 'react'
import { Text } from '@nextui-org/react'
import { Modal } from "@nextui-org/react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Index() {
  const [showModal, setShowModal] = React.useState(false)

  function closeHandler(params) {
    setShowModal(false)
  }

  const [value, setValue] = React.useState('');
  console.log(value)

  return (
    <div className="explainDocsArea">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="text-center mb-6">
          <h5 className="patientSearchText">
            EXPLAIN LEGAL DOCUMENT
          </h5>
          <Text size="$md" className='flex justify-center items-center '>
            Please Paste the Document You Want Explained Below
          </Text>
        </div>

        <div className="text-center my-10">
          <ReactQuill theme="snow" value={value} onChange={setValue} className='textEditor4ExplainDoc' />
        </div>

        <div>
          <div>
            <button onClick={() => { setShowModal(true) }} type="submit"
              className="inline-flex items-center justify-center w-full 
              explainBtn py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-600 border 
              border-transparent rounded-md focus:outline-none hover:bg-gray-700 focus:bg-gray-700"
            >
              EXPLAIN DOCUMENT NOW
            </button>
          </div>

          <Modal
            aria-labelledby="modal-title"
            open={showModal}
            onClose={closeHandler}
            className='border border-pink-00'
            width='10'
          >
            <Modal.Body className='explainDocModal'>
              <div className="relative w-full px-20 overflow-hidden bg-white rounded-xl">
                <div className="absolute top-0 right-0 pt-3 pr-3">
                  <button type="button"
                    className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 
                    hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
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

                <div className="p-6">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-10 h-10 mx-auto'>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    
                    <p className="mt-8 text-xl font-bold text-gray-900">
                      Document Explanation
                    </p>
                    <p className="mt-3 text-base font-medium text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo, praesentium laudantium recusandae corrupti dicta provident
                      delectus impedit voluptas eos iste, ut quisquam rerum itaque ipsum earum, consequuntur voluptate laborum assumenda laboriosam
                      nemo consectetur. Dicta facilis rem, nemo delectus magnam animi aliquid non necessitatibus perferendis vitae dignissimos quia
                      eius sed. Modi nobis, iusto, consequatur neque quibusdam aspernatur soluta omnis quos adipisci molestiae illo delectus, odio
                      recusandae blanditiis eius exercitationem laborum officiis a? Recusandae quia ducimus illum,voluptatem dolorem obcaecati ullam
                      quo in atque natus officiis incidunt cupiditate sit aliquam, quae ipsam provident maxime eum, neque eos dolor ex laboriosam! Veniam.
                    </p>
                    <div className="mt-8">
                      <button type="button"
                        className="inline-flex items-center justify-center w-full 
                        px-6 py-4 text-xs font-bold tracking-widest text-gray-900 
                        uppercase transition-all duration-200 bg-transparent border 
                        border-gray-900 rounded-md focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white">
                        Copy Explanation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className="statsText mt-16">
          <Text b h1 size={30} className='flex justify-center items-center'>
            Simplyfying Legal Documents
          </Text>
          <Text size="$md" className='flex justify-center items-center '>
            #Understanding Legal Documents Made Easy
          </Text>
        </div>
      </form>
    </div>
  )
}

export default Index
