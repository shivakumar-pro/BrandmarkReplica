import Navbar from "./Navbar";
import ImageContentSwitcher from "./ImageContentSwitcher ";

export default function Home() {
    return <div className="min-h-screen">
        <div className="h-screen flex flex-col items-center" style={{ background: '#fcd469' }}>
            <Navbar />
            <div className="flex flex-col items-start w-3/5 p-4 ">
                <h1 className="font-proxima text-[1rem] sm:text-[2rem] md:text-[2.5rem] font-bold mt-16 w-3/4">
                    Create a unique, professional logo for your business
                </h1>
                <p className="font-proxima text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] font-normal w-3/5">
                    Kickstart your brand with business card designs, social media graphics, app icons, letterheads, and more
                </p>
            </div>
            <div className="w-3/5 h-16 mt-16 flex items-start">
                <button className="bg-gray-800 font-proxima text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-white font-bold h-full w-60 rounded-full">
                    Create my logo
                </button>
            </div>
        </div>

        <div className="h-64 flex justify-center bg-gradient-to-r from-[#f5f5dc] via-[#ffc0cb] to-[#fcd469]">
            <ImageContentSwitcher />
        </div>

       <div className="h-screen flex justify-center w-full bg-[#efefef]">
    <div className="h-24 flex items-center justify-center w-3/4 mt-20">
        <ul className="w-full grid gap-4 lg:grid-cols-5 sm:grid-cols-3 xs:grid-cols-3">
            <li className="flex justify-center items-center">
                <img src="/images/l1.png" alt="" className="max-w-full h-auto" />
            </li>
            <li className="flex justify-center items-center">
                <img src="/images/l2.png" alt="" className="max-w-full h-auto" />
            </li>
            <li className="flex justify-center items-center">
                <img src="/images/l3.png" alt="" className="max-w-full h-auto" />
            </li>
            <li className="flex justify-center items-center">
                <img src="/images/l4.png" alt="" className="max-w-full h-auto" />
            </li>
            <li className="flex justify-center items-center">
                <img src="/images/l5.png" alt="" className="max-w-full h-auto" />
            </li>
        </ul>
    </div>
</div>

    </div>;
}