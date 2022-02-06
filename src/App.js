import './App.css';
import Radial from './components/Radial';


function App() {
  return (
    <div className="antialiased bg-gray-600 min-h-screen flex justify-center items-center">
      <div className='flex px-8 py-4'>
        <div>
          <div>
            <h1 className='flex-none text-3xl underline text-white font-bold uppercase text-center tracking-widest space-y-4'>Trillion-Dollar Club</h1>          
            <h1 className='text-white text-lg font-medium'>Members of Trillion Dollar Club</h1>
            <p className='tracking-6 text-lg text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='flex flex-col'>
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

        <div className='flex justify-center items-center'>
        <Radial/>
        </div>
      </div>
    </div>
  );
}

export default App;
