import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Avatar from '@mui/material/Avatar';
import admin from '../../public/admin.jpg'
export default function Profile(){
    return(
        // (e) => setFile(e.target.value)
        <main className="h-screen py-6 md:py-28 bg-white">
            <h1 className="py-5 font-poppins text-xl text-center text-slate-900"> Set Your Profile</h1>
            <form className="w-full p-4 md:w-[70%] bg-slate-100 rounded flex-col justify-center mx-auto">
                <div className='mb-3 flex md:flex-row items-center flex-col'>
                    <div>
                    <label htmlFor="file">
                  {/* <DriveFolderUploadOutlinedIcon className="icon" /> */}
                  <Avatar alt="Remy Sharp" src='../../../public/admin.jpg' />
                </label>
                <input
                  type="file"
                  id="file"
                //   onChange={}
                  style={{ display: "none" }}
                /></div>
                    <div>This account belongs to <i>bravinlude@gmail</i>. Please fill the slots below to proceed to your domain</div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                    <input type="text" className="outline-none p-2 bg-transparent border-b border-gray-500 "placeholder="Enter your FirstName" />
                    <input type="text" className="outline-none p-2 bg-transparent border-b border-gray-500 "placeholder="Enter your LastName" />
                    <input type="text" className="outline-none p-2 bg-transparent border-b border-gray-500 "placeholder="Enter your Identity number" />
                    <input type="text" className="outline-none p-2 bg-transparent border-b border-gray-500 "placeholder="Enter your FirstName" />
                </div>
            </form>
        </main>
    )
}