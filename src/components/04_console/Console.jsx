import { useState } from "react";

//DEPENDENCIES IMPORT
import {
  ArrowCircleUpRounded,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { GiBroom } from "react-icons/gi";

//REDUX IMPORTS & SLICE
import { useDispatch, useSelector } from "react-redux";
import { toggleSlice } from "../../redux/slices/exportSlices";

const Console = () => {
    //REDUX ---> CHANGE ARROW CONSOLE DIRECTION 
  const dispatch = useDispatch();
  const showConsoleMenu = useSelector((state) => state.toggleSlice.console);

  function handleArrowChange() {
    dispatch(toggleSlice.actions.toggleConsole());
  }

  //CLEAR ALL LOGS ON TERMINAL
  const [logs, setLogs] = useState("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww222222222222222222222222222222222555555555555555555555555555555555000000000000000000000000022222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222oooooooooooooooooooooooooooooooooooooooosrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmsssssssssssssssssssssssssssssssssssss33333333333333333333333pppppppppppppppppppsssssssssssddddddddjjjjjjrrnvvvvvvvvvvvvvvvvvvvvvvvvvvvdd");

  function handleClearLogs(){
    setLogs("");
  }

  return (
    <div className=" bg-[--sec-color] h-full overflow-hidden">
      <nav className=" px-4 flex items-center justify-between py-4 border-b-2 border-[--accent5]">
        <div className=" flex items-center gap-2 text-[--accent2]">
          <ArrowCircleUpRounded className=" text-[--accent2]" />

          <h1>Console</h1>
        </div>

        <div className=" flex gap-4">
          <GiBroom onClick={handleClearLogs} className=" text-[--accent2] text-md rotate-12 cursor-pointer hover:text-[--accent1] transition-text duration-200" />

          {/*WHEN CONSOLE DOWN CHANGE TO ARROW UP*/}
          <i
            onClick={handleArrowChange}
            className="text-[--accent2] cursor-pointer hover:text-[--accent1] transition-text duration-200"
          >
            {showConsoleMenu ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </i>
        </div>
      </nav>

      {/*CAN YOU TRY FIX THIS THING BELOW NOT OVERFLOWING*/}
      <div className="px-4 text-[.8rem] text-[--accent6] select-none py-2 font-medium overflow-y-scroll h-full">
        <p style={{wordWrap: "break-word"}}>{logs}</p>
      </div>
    </div>
  );
};

export default Console;
