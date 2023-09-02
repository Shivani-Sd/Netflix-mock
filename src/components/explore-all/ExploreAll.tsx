import { ReactComponent as RightIcon } from "../../../src/assets/right-arrow.svg";

const ExploreAll = () =>{
    return(
        <div className="flex animate-slide-into-left w-[14%]">
            <p className="text-[#06b6d4] text-[15px]">Explore All</p>
            <RightIcon className="fill-cyan-500 w-6/12"/>
        </div>
    )
}
export default ExploreAll;