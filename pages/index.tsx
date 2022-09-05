import { Navbar } from '../components/Navbar';
import ZIndex from '../components/components_testing/ZIndex';

export default function Home() {
  return (
    <>
      <Navbar />

      <ZIndex />

      {/* <main className='mx-auto px-2 select-none font-anton md:-translate-y-24 md:-translate-x-24'>
        <h1 className='text-6xl md:text-7xl mb-4'>
          creative developer
          <span className='text-primary'>.</span>
        </h1>
        <p className='font-montserrat font-regular md:text-2xl'>
          modern <span className='font-bold text-primary'>&</span> innovative
          digital solutions
          <span className='text-primary font-bold font-anton ml-[5px] text-2xl leading-[0px] md:leading-[0px] md:text-4xl'>
            .
          </span>
        </p>
      </main>

      <footer className='flex justify-between'>
        <div className='w-[80px] h-[80px] flex items-center justify-center'>
          sounds
        </div>
        <div className='w-[80px] h-[80px] flex items-center justify-center'>
          social
        </div>
      </footer> */}
    </>
  );
}
