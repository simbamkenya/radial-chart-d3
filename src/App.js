import './App.css';
import Radial from './components/Radial';
import { gsap } from 'gsap'
import React, { useRef, useEffect } from 'react'


function App() {
  const contentRef = useRef(null)

  useEffect(()=>{
        gsap.from(contentRef.current, {
          x: -150
        });
  }, [])
  return (
    <div className="antialiased bg-gray-600 min-h-screen ">
      <h1 className='flex-none text-3xl underline text-white font-bold uppercase text-center tracking-widest space-y-4 py-6'>Trillion-Dollar Club</h1>
      <div className='container mx-auto'>
        <div className=''>
          <div className='px-4'>
            <div className='px-2' ref={contentRef}>
              <div>
                {/* <h1 className='flex-none text-3xl underline text-white font-bold uppercase text-center tracking-widest space-y-4'>Trillion-Dollar Club</h1>           */}
                <h1 className='text-white text-2xl font-medium text-center underline py-3 '>Members of Trillion Dollar Club</h1>
                <p className='tracking-6 md:text-xl text-white'>
                Only a few public-traded firms have achieved $1 trillion or more in market capitalization.
                According to data collected by “Companies Market Cap”, only four companies at the moment 
                have reached and retained this market as of 7th February 2022. Only Saudi Aramco the oil 
                and gas giant counts as the only non-American firm to feature on the trillion-dollar club.
                  These elite firms stand as the biggest companies around the globe.</p>
              </div>

              <div className='mt-4'>
               <Radial/>
              </div>

              <div>
                <div className='flex flex-col mt-8'>
                  <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block py-2 min-w-full sm:px-6 lg:px-8'>
                      <div className='overflow-hidden shadow-md sm:rounded-lg'>
                        <table className='min-w-full'>
                          <thead className='bg-gray-50'>
                            <tr>
                              <th scope='col' className='py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase'>Name</th>
                              <th scope='col' className='py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase'>Market Cap</th>
                              <th scope='col' className='py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase'>Country</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className='bg-white border-b'>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>Apple</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>$2.561 T</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>USA</th>
                            </tr>
                            <tr className='bg-white border-b'>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>Saudi Aramco</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>$1.965 T</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>USA</th>
                            </tr>
                            <tr className='bg-white border-b'>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>Google</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>$1.961 T</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>USA</th>
                            </tr>
                            <tr className='bg-white border-b'>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>Amazon</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>$1.598 T</th>
                              <th className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>USA</th>
                            </tr>
                          </tbody>
                        </table>
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
  );
}

export default App;
