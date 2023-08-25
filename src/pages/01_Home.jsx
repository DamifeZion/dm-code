import {
  Toolbar,
  TextSpace, 
  Console
} from '../components/exportComponent'

const Home = () => {
  return (
    <div>
        
        <div className='flex '>

          <div className='flex flex-col pt-1 bg-[--accent4] w-1/2 h-[88vh] border-r-2 border-[--accent2]'>
            <Toolbar />
            <div className=' h-[100%] mt-1'>
              <TextSpace />
            </div>

            {/*WIDTH 35% DEFAULT ON HIDE 11%*/}
            <div className=' h-[11%]'>
              <Console />
            </div>
          </div>

          <div className=' w-1/2 '>
            View Here!!!!
          </div>
        </div>
    </div>
  )
}

export default Home