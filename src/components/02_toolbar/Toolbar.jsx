
import { 
  KeyboardArrowDown,
  OpenWithRounded,
  Save,
  CheckRounded,
} from "@mui/icons-material";
import {useSelector, useDispatch} from "react-redux";
import {stateValueSlice} from "../../redux/slices/exportSlices";

const Toolbar = () => {
  const dispatch = useDispatch()
  const workspaceValue = useSelector(state => state.stateValueSlice.toolbar.workspaceName)

  function handleChange(e){
    dispatch(stateValueSlice.actions.handleWorkSpaceChange(e.target.value));
  }

  function handleSaveWorkspaceName(){
    const maxCharacter = 13;
    const minCharacter = 4;
    if(workspaceValue.length > 0) {
      if(workspaceValue.length >= minCharacter && workspaceValue.length <= maxCharacter){
        alert(`WorkspaceName: ${workspaceValue} saved`)
      } else if(workspaceValue.length > maxCharacter ){
        alert(`WorkspaceName Should Not Be More Than ${maxCharacter} Characters`)
      } else if(workspaceValue.length < minCharacter) {
        alert(`WorkspaceName Should Be At Least ${minCharacter} Characters`)
      }
    } else {
      alert("Please Enter A WorkspaceName")
    }
  }

  return (
    <div className="flex justify-between items-center pl-[2rem] pr-2 text-[--color1]">

      <div className=" flex items-center justify-between bg-[--pri-color] w-full px-4 py-2 rounded-lg">

        <div className=" flex items-center">
          <span className=" flex flex-col gap-[.35rem] items center">
            <i className="w-[0.25rem] h-[0.25rem] bg-[--sec-color] rounded-full"></i><i className="w-[0.25rem] h-[0.25rem] bg-[--sec-color] rounded-full"></i><i className="w-[0.25rem] h-[0.25rem] bg-[--sec-color] rounded-full"></i>
          </span>

          
          <div className="relative flex items-center gap-2">
            <input type="text"
              placeholder="WorkspaceName"
              value={workspaceValue}
              onChange={handleChange}
              className="ml-2 bg-[--accent2] pl-5 pr-9 rounded-md py-2 w-[280px] border-none outline-none capitalize font-semibold text-[--accent5]"
            />

{/*HANDLE THE VALUES IN THE SPACE N MAKE THEM NOT MORE THAN 13 CHARACTERS */}
            <Save
              onClick={handleSaveWorkspaceName}
              className=" absolute right-2 cursor-pointer text-[--accent5]"
            />
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