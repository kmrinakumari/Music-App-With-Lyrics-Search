import React, { useState } from "react"
import { Formik } from "formik"
import Swal from "sweetalert2";

const AddMusic = () => {

  const [selImage, setSelImage] = useState("");
  const [selFile, setSelFile] = useState("");

  const userSubmit = async (formdata) => {
    formdata.thumbnail = selImage;
    formdata.file= selFile;
    console.log(formdata);

    // 1. URL
    // 2. Request Method
    // 3. Data
    // 4. Data Format

    const response = await fetch('http://localhost:5000/music/add', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : { 'Content-Type' : 'application/json' }
    })

    console.log(response.status);

    Swal.fire({
      icon : 'success',
      title: 'Nice',
      text : 'You Registered successfully'
    })

    // code to stop loading icon

  }

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
        // toast.success("Image Uploaded!!", {
        //   style: {
        //     borderRadius: "10px",
        //     background: "#333",
        //     color: "#fff",
        //   },
        // });
      }
    });
  };


  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
        // toast.success("Image Uploaded!!", {
        //   style: {
        //     borderRadius: "10px",
        //     background: "#333",
        //     color: "#fff",
        //   },
        // });
      }
    });
  };

  return (
    <div style={{ backgroundColor: "#eee", height: "100vh" }}>
      <div className="col-md-6 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <Formik
              initialValues={{ title: "", year: "", genre: "", artist: "" }}
              onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center">Signup Here</h3>

                  <label>Title</label>
                  <input type="title" className="form-control mb-3" name="title" onChange={handleChange} value={values.title} />
                  <label>Year</label>
                  <input type="year" className="form-control mb-3" name="year" onChange={handleChange} value={values.year} />
                  <label>Genre</label>
                  <input type="genre" className="form-control mb-3" name="genre" onChange={handleChange} value={values.genre} />
                  <label>Artist</label>
                  <input type="artist" className="form-control mb-3" name="artist" onChange={handleChange} value={values.artist} />

                  <label>Upload Thumbnail</label>
                  <input type="file" onChange={uploadThumbnail} />
                  <label>Upload File</label>
                  <input type="file" onChange={uploadFile} />

                  <button type="submit" className="btn btn-primary mt-5">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMusic;