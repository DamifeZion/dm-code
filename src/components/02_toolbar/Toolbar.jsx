import { KeyboardArrowDown, OpenWithRounded } from "@mui/icons-material"

const Toolbar = () => {
  return (
    <div className="flex justify-between items-center pl-[2rem] pr-2 text-[--color1]">

      <div className=" flex items-center justify-between bg-[--pri-color] w-full px-4 py-2 rounded-lg">

        <div className=" flex items-center">
          <span className=" flex flex-col gap-[.35rem] items center">
            <i className="w-[0.25rem] h-[0.25rem] bg-[--sec-color] rounded-full"></i><i className="w-[0.25rem] h-[0.25rem] bg-[--sec-color] rounded-full"></i><i className="w-[0.25rem] h-[0.25rem] bg-[--sec-color] rounded-full"></i>
          </span>

          <div className=" ml-2 bg-[--accent2] pl-5 rounded-md py-2 pr-[7.7rem] capitalize font-semibold ">
            <h1>workspace name</h1>
          </div>  
        </div>         

        <button className="flex relative px-2 py-[.35rem] border-[.13rem] border-[--accent5] uppercase rounded-[0.23rem]">
          <p className=" border-r-2 border-[--accent5] pr-3">html</p>

          <KeyboardArrowDown className=" ml-1 text-[--accent5]"/>
        </button>
      </div>

      <button className=" hover:cursor-move ml-2 px-3 py-3 border border-[--accent1] rounded-lg">
        <OpenWithRounded className=" text-[--accent1]"/>
      </button>
    </div>
  )
}

export default Toolbar