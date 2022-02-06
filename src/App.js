import './App.css';
import Radial from './components/Radial';


function App() {
  return (
    <div className="antialiased bg-gray-600 min-h-screen flex justify-center items-center">
      <div className='flex px-8 py-4'>
        <div>
            <h1 className='flex-none text-3xl text-white font-bold uppercase text-center tracking-widest space-y-4'>Trillion-Dollar Club</h1>          
            <h1 className='text-white text-xl'>Members of Trillion Dollar Club</h1>
            <p className='tracking-6 text-lg text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        
        <div className='flex justify-center items-center'>
        <Radial/>
        </div>
      </div>
    </div>
  );
}

export default App;
