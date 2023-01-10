import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const ListMusic = () => {

  const [musicData, setMusicData] = useState([]);
  const [name, setName] = useState("")

  const getData = async () => {
    const response = await fetch('http://localhost:5000/music/getall');
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setMusicData(data);
    } else {
      console.log('something went wrong')
    }
  }

  useEffect(() => {
    getData();
  }, [])
  
  const deleteMusic =async(id) => {
    console.log(id);
    const response = await fetch('http://localhost:5000/music/delete'+id,{
        method: 'DELETE',
        body : JSON.stringify(id),
        headers :{
          "Content-Type" : "application/json",
        }

    })

    if(response.status === 200){
        Swal.fire( {
        icon : 'success',
        text : 'Music Deleted!!'
            }
        )
    }
 }

 const searchBylyrics=()=>{
  getData((data)=>{
    const filteredData=data.filter((item)=>item.lyrics.toLowerCase().includes(name.toLowerCase()));
    console.log(filteredData);
    setMusicData(filteredData)
  })
 }


  const displayMusic = () => {
    return( 
              <div className="container-fluid">
                <input type="search" value={name} onChange={e=>setName(e.target.value)}/>
                <button onClick={searchBylyrics}><i class="fas fa-globe "></i></button>
              <div className='row'>
                {musicData.map((music) => (
                <div className='col-md-3 col-lg-4'>
                  <div className='card'>
                    <div className='card-header'>
                      <img src={"http://localhost:5000/"+music.thumbnail } alt="" />
                    </div>
                    <div className='card-body'>
                      <p>{music.title}</p>
                      <p>{music.artist}</p>
                      <p>{music.genre}</p>
                      <p>{music.category}</p>
                      <p>{music.year}</p>
                      </div>
                  </div>
                  <div className='card-footer'>
                  <audio src={"http://localhost:5000/"+music.file}></audio>
                  </div>
                    <button onClick={deleteMusic}>Delete</button>
                </div>
                ))}
              </div>
              </div>
    )
   }

  return (
    <div>{displayMusic()}</div>
  )
}

export default ListMusic;