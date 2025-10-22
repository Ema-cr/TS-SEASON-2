import { toast, ToastOptions } from "react-toastify";

type notification = "error" | "success" | "info" | "warning"
export const notification = (text:string, type:notification,time?:number) =>{
  
    if (type === "success"){
        toast.success(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (type === "error"){
               toast.error(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
         if (type === "info"){
               toast.info(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        if (type === "warning"){
               toast.warning(text, {
                position: "top-right",
                autoClose: time ?? 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
}

