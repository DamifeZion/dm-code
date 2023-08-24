import { useSelector, useDispatch } from "react-redux"
import { toggleSlice } from "../../redux/slices/exportSlices";

const Navbar = () => {

  const dispatch = useDispatch();
  const menu = useSelector(state => state.toggleSlice.menu);


  function handleClick(){
    dispatch(toggleSlice.actions.toggleMenu())
    console.log(menu)
  }

  return (
    <div className='flex justify-between bg-[--color2] text-[--color1] px-[--px] py-[--py] text-xl font-black tracking-wider'>
      <h1 onClick={handleClick}>Logo</h1>

      <div className=' flex'>

      </div>

    </div>
  )
}

export default Navbar