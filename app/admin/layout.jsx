import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children}){
    return (
        <>
            <div className="flex">
                <ToastContainer theme="dark"/>
                <Sidebar/>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-bottom border-black">
                        <h3 className="font-medium">Admin Pannel</h3>
                        <Image src={assets.profile_icon} width={40} alt="" />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}