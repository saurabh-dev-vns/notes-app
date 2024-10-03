import React from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const AttachmentInput = ({attachments,setAttachments}) => {

    const handleAttachmentUpload=async(e)=>{
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("attachments", file);
            // formData.append("userId", user._id);
      
            try {
              const response = await axiosInstance.post(
                "/upload-attachment",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
              const attachmentURL = response.data.attachments;
              setAttachments(attachmentURL);
              toast.success("Profile photo updated", {
                style: {
                  fontSize: "13px",
                  maxWidth: "400px",
                  boxShadow: "4px 4px 8px rgba(0, 1, 4, 0.1)",
                  borderRadius: "8px",
                  borderColor: "rgba(0, 0, 0, 0.8)",
                  marginRight: "10px",
                },
              });
            } catch (error) {
              toast.error("Failed to upload profile photo", {
                style: {
                  fontSize: "13px",
                  maxWidth: "400px",
                  boxShadow: "4px 4px 8px rgba(0, 1, 4, 0.1)",
                  borderRadius: "8px",
                  borderColor: "rgba(0, 0, 0, 0.8)",
                  marginRight: "10px",
                },
              });
              console.error("Error uploading profile photo:", error);
            }
          }
        };
    return (
        <div className='flex items-center gap-4'>
         <input type="file" className='p-2 border rounded-md text-sm'/>
         <button className='w-9 h-9 flex items-center transition-all rounded-xl border items-center text-white bg-gray-800 hover:bg-gray-900'>
                    <MdAdd
                        className='text-xl text-white-700 hover:text-white ml-[8px]'
                    />
                </button>
        </div>
    )
}

export default AttachmentInput
