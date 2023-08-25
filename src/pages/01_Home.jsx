import {
  Toolbar,
  TextSpace, 
  Console
} from '../components/exportComponent'

//REDUX IMPORT
import {useSelector} from 'react-redux'

const Home = () => {
  const showConsoleMenu = useSelector(state => state.toggleSlice.console)

   return (
    <div>
        
        <div className='flex '>

          <div className='flex flex-col pt-1 bg-[--accent4] w-1/2 h-[88vh] border-r-2 border-[--accent2]'>
            <Toolbar />
            <div className=' h-[100%] mt-1 mb-10'>
              <TextSpace />
            </div>

            {/*WIDTH 35% DEFAULT ON HIDE 9%*/}
            <div className={ showConsoleMenu ? `h-[9%] w-full` : `h-[35%]`}>
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