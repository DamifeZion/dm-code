import { Menu, Verified, KeyboardArrowDownOutlined, ContentCopy, PlayArrowRounded } from "@mui/icons-material"

const Navbar = () => {

  return (
    <nav className='flex shadow-nav bg-[--pri-color] justify-between px-[--px] py-[--py] tracking-wider'>
      
      <div className=" flex items-center text-md font-black">
        <span className=" flex py-[.1rem] px-1  rounded-xl border-[0px]  mr-4 cursor-pointer shadow-shadow1 hover:bg-[--accent1] hover:text-[--accent3] transition-bg duration-200 ">
          <Menu sx={{fontSize: "2rem"}}/>
        </span>

        <h1 className="text-[--accent1] flex gap-1">DM
          <span className="text-[--sec-color]">
            code
          </span>
        </h1>

        <button className=" flex gap-2 ml-6 py-[.4rem] px-4 items-center rounded-full text-[--sec-color] text-[1rem] hover:bg-[--accent1] hover:text-[--accent3] transition-bg duration-200 shadow-shadow1 font-medium">
          <Verified sx={{fontSize: "1rem"}}/> 
          <p>Go Premium</p>
        </button>
      </div>

      <div className=' flex items-center gap-8 text-[0.9rem] font-medium'>
        <button className=" flex items-center bg-[--accent2] py-2 px-3 rounded-lg shadow-copyCode hover:scale-105 transition-scale duration-200">
          <ContentCopy sx={{fontSize: "1.3rem"}} className=" mr-[0.3rem]"/>
          <p className=" pr-3 border-r-2 border-[--sec-color]">Copy code</p>
          <KeyboardArrowDownOutlined className=" text-[--accent5] ml-1"/>
        </button>

        <button className=" flex bg-[--accent1] py-2 px-4 font-medium rounded-lg text-[--accent3] shadow-run hover:scale-105 transition-scale duration-200">
          <p>Run</p>
          <PlayArrowRounded />
        </button>
      </div>

    </nav>
  )
}

export default Navbar