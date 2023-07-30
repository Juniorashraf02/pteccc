import { NavigationBar } from "@/components/Header/NavigationBar";
import { TopBar } from "@/components/Header/TopBar";

const alumni= () => {
    return (
        <div>
            <TopBar />
            <NavigationBar />
            <div className="bg-white h-screen text-xl flex justify-center items-center text-slate-800 font-bold ">
                <p>Alumni list coming soon...</p>
               <p className="animate-pulse duration-700"> ...!!!</p>
            </div>
        </div>
    )
}

export default alumni ;