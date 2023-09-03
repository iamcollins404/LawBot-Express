import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Text } from '@nextui-org/react'
import { Modal } from "@nextui-org/react";

function Index() {
  const [showModal, setShowModal] = React.useState(false)

  function closeHandler(params) {
    setShowModal(false)
  }

  const [value, setValue] = React.useState('');
  console.log(value)
  return (
    <div>
      <h5 className='translateHeading'>
        Translate Legal Documents
      </h5>
      <div class="grid grid-cols-3 gap-4 mr-28 mt-10">
        <div className="col-span-2 mb-20">
          <Text size="$md" className='mb-4'>
            Please Paste the Document You Want To Translate Below
          </Text>

          <ReactQuill theme="snow" value={value} onChange={setValue} className='translateDocTextEditor' />
        </div>

        <div className="translateOptionsDiv mt-36">
          <div className="bg-gray-100 rounded-lg p-1">
            <div className="border border-gray-400 rounded-lg">

              <div className="relative my-10 px-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>

                <select
                  className="py-6 pl-12 px-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 chooseLanguage"
                >
                  <option value="" disabled selected>Choose Language...</option>
                  <option value="english">🇺🇸 English</option>
                  <option value="spanish">🇪🇸 Spanish</option>
                  <option value="french">🇫🇷 French</option>
                  <option value="german">🇩🇪 German</option>
                  <option value="swahili">🇰🇪 Swahili</option>
                  <option value="amharic">🇪🇹 Amharic</option>
                  <option value="yoruba">🇳🇬 Yoruba</option>
                  <option value="zulu">🇿🇦 Zulu</option>
                  <option value="arabic">🇪🇬 Arabic</option>
                  <option value="hausa">🇳🇬 Hausa</option>
                  <option value="swazi">🇸🇿 Swazi</option>
                  <option value="shona">🇿🇼 Shona</option>
                  <option value="ethiopian">🇪🇹 Ethiopian</option>
                </select>
              </div>

              <div className="my-8 mx-10">
                <button type="button mt-4 px-10"
                  onClick={() => { setShowModal(true) }}
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white">
                  Translate Now
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
                          Translating Document
                        </p>
                        <p className="mt-3 text-base font-medium text-gray-600">
                          This can take a few minutes depending on your network. Don’t leave this page. Hang on while we translate the Document.
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
