import { ArrowCircleUpRounded, KeyboardArrowDown } from "@mui/icons-material";
import {GiBroom} from 'react-icons/gi'

const Console = () => {

    return (
        <div className=" bg-[--sec-color] h-full overflow-hidden">
            <nav className=" px-4 flex items-center justify-between py-4 border-b-2 border-[--accent5]">
                <div className=" flex items-center gap-2 text-[--accent2]">
                    <ArrowCircleUpRounded className=" text-[--accent2]"/>

                    <h1>
                        Console
                    </h1>
                </div>

                <div className=" flex gap-4">
                    <GiBroom className=" text-[--accent2] text-md rotate-12 cursor-pointer hover:text-[--accent1] transition-text duration-200"/>

{/*WHEN CONSOLE DOWN CHANGE TO ARROW UP*/}
                    <KeyboardArrowDown className="text-[--accent2] cursor-pointer hover:text-[--accent1] transition-text duration-200"/>
                </div>
            </nav>

{/*CAN YOU TRY FIX THIS THING BELOW NOT OVERFLOWING*/}
            <div className="px-4 text-[.8rem] text-[--accent6] select-none pt-2 font-medium overflow-y-scroll h-full">
                <p>
                    There are no errors in your workspace Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus architecto rerum ipsa explicabo corrupti harum est quisquam eum incidunt atque eius veritatis, quia, unde qui ratione voluptate sequi quo alias pariatur aliquam aliquid? Suscipit laudantium assumenda officiis impedit laboriosam molestias tempore enim cum sed pariatur a dolore et quae, temporibus minima nulla quos cumque, nesciunt soluta? Nulla hic animi quas est dignissimos. Velit molestiae provident accusamus laudantium ex facere commodi itaque, illo nisi beatae ducimus facilis tempore ipsa dolore asperiores! Blanditiis, iusto. Voluptates magni numquam iste est minus, assumenda, fugit facere vitae eum vero adipisci. Aliquam debitis odit provident.
                </p>
            </div>
        </div>
    )
}

export default Console;