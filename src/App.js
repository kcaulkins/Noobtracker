import React from 'react';

function App() {
  return (
    <div className="App font-sans leading-normal p-8" >
      <div className="container mx-auto flex-none sm:flex justify-center">
        
        <div className="rounded bg-gray-100 flex-auto shadow-lg w-3/4 mr-12">
          <h2 className="rounded rounded-b-none text-gray-100 text-2xl font-light uppercase px-6 py-4 bg-gray-800">Character list</h2>
          
          <div className="bg-gray-200 px-6 py-4 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Character</h3>
              <p>Character details</p>
            </div>
            <button class="rounded px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 hover:bg-red-600 md:text-lg xl:text-base border border-solid border-red-800 hover:border-none text-red-600 hover:text-white font-semibold leading-tight">
              Remove
            </button>
          </div>
          
        </div>

        <div className="rounded bg-gray-200 flex-auto shadow-lg px-6 py-4 w-1/4">
          <h2 className="rounded rounded-b-none text-2xl font-light mb-2 uppercase">Add a character</h2>
          <form action="">
            <input name="character" type="text" placeholder="Character Name" className="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none mb-2"/>
            <textarea name="details" rows="5" placeholder="Describe your interaction with the character" className="border border-gray-400 mb-4 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none"></textarea>
            <input type="submit" value="Add" className="rounded float-right px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-gray-200 hover:bg-blue-600 md:text-lg xl:text-base border border-solid border-blue-600 hover:border-none text-blue-600 hover:text-white font-semibold leading-tight"/>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
