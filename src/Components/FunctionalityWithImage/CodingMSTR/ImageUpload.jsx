// Upload Image and show | Image Cropping Feature


import React, { useRef, useState } from 'react'
import img from '../../../Public/road.jpg';

const ImageUpload = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState();

    function handleImgClick() {
        inputRef.current.click(); // ye click event inputRef me pass ho ja rha hai // we can use it later 
    }

    function handleImgChange(e) {
        let file = e.target.files[0];
        const imgname = e.target.files[0].name;
        const reader = new FileReader();
        console.log("reader", reader);

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            const img = new Image(); // <img /> this both is similar
            console.log("whats inside this Image constructor", img);

            img.src = reader.result; // here we are adding property src
            console.log("img src", img.src);

            //  When the image has finished loading, the specified function will be executed.
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, (maxSize - img.width) / 2, (maxSize - img.height) / 2);
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: "image/png",
                            lastModified: Date.now(),
                        });

                        console.log(file);
                        setImage(file);
                        // handleUploadButtonClick(file);
                    },
                    "image.jpeg",
                    0.8
                );
            };
        }
    }

    // const handleUploadButtonClick = () => {
    //     var myHeaders = new Headers();
    //     const token = "vsdfshjewre8it4894nx9x";
    //     myHeaders.append("Authorization", `Bearer ${token}`);

    //     var formData = new FormData();
    //     formData.append("file", image);

    //     var requestOptions = {
    //         method: "POST",
    //         headers: myHeaders,
    //         body: formData,
    //         redirect: "follow",
    //     };

    //     fetch("https://jsonplaceholder/upload/profile_pic", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => {
    //             console.log(JSON.parse(result));
    //             const profileURL = JSON.parse(result);
    //             setImage(profileURL.img_url);
    //         }
    //         )
    //         .catch((error) => console.log("error", error));
    // };

    return (
        <div className='w-6/12 border-2 border-black p-6 mx-auto mt-4'>
            <label htmlFor="" className='text-center'>
                <h1 className='font-bold mb-4'>{image ? image.name : "Choose Image"}</h1>
            </label>
            <div onClick={handleImgClick} className='flex justify-center items-center flex-col'>
                {
                    image ? (
                        <img src={URL.createObjectURL(image)} alt="img" className='w-52 h-52 rounded-full' ref={inputRef} />
                    ) : (
                        <img src={img} alt="img" className='w-52 h-52' ref={inputRef} />
                    )
                }
                <input type="file" ref={inputRef} onChange={handleImgChange} className='hidden' />
                {/* <button onClick={() => handleUploadButtonClick()} className='p-2 bg-green-400 rounded-lg mt-4'>Upload</button> */}
            </div>
        </div>
    )
}

export default ImageUpload