
import GlobalContext from "./globalContext";
import { useState, useEffect } from "react";

const GlobalState = (props) => {
  
  const [show, setShow] = useState("NT")
  
  const showPage = (value) =>{
    setShow(value)
  }


  const [joinCode, setJoinCode] = useState("NO");

  const JoinCode = (value) => {
    setJoinCode(value)
  }


  const [deal, setDeal] = useState({});

  const Deal = (value) => {
    setDeal(value)
  }


  const [user, setUser] = useState();

  useEffect(() => {
    loadUserData();
}, []);

const loadUserData = async () => {
    const responce = await fetch(`https://sugabackend.azurewebsites.net/api/auth1/getuser`, {
        method: 'GET',
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    });
    const Json = await responce.json()
    setUser(Json)
}


   // Get all Notes
//    const getNotes = async () => {

//     // API call
//     const responce = await fetch(`${host}/api/notes/fetchallnotes`, {
//      method: 'GET',
//      headers: {
//       'Content-Type': 'application/json',
//       'auth-token': localStorage.getItem('token')
//      }
//    });
//    const json = await responce.json()
//    console.log(json)
//    setNotes(json)
       
//      }

//   // Add a Note
//   const addNote = async (title, description, tag) => {

//  // API call
//  const responce = await fetch(`${host}/api/notes/addnote`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'auth-token': localStorage.getItem('token')
//   },
//   body: JSON.stringify({title, description, tag})
// });
// const note = await responce.json();
//   setNotes(notes.concat(note))

//   }

//   // Delelte a Note
//   const deleteNote = async (id) => {
//      // API call
//      const responce = await fetch(`${host}/api/notes/deletenote/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         'auth-token': localStorage.getItem('token')
//       },
//     });
//     const json = responce.json();
//     console.log(json);

//     console.log("Deleting the note with id:" + id);
//     const newNotes = notes.filter((note) => { return note._id !== id })
//     setNotes(newNotes)
//   }


//   // Edit a Note
//   const editNote = async (id, title, description, tag) => {
//     // API call
//     const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'auth-token': localStorage.getItem('token')
//       },
//       body: JSON.stringify({title, description, tag})
//     });
//     const json = await responce.json()
//    console.log(json)

//     let newNotes = JSON.parse(JSON.stringify(notes));

//     for (let index = 0; index < newNotes.length; index++) {
//       const element = newNotes[index];
//       if (element._id === id) {
//         newNotes[index].title = title;
//         newNotes[index].description = description;
//         newNotes[index].tag = tag;
//         break;
//       }
//     }
//     setNotes(newNotes)
//   }

  return (
    <GlobalContext.Provider 
    value={{ 
      show, 
      showPage ,
      user,
      joinCode,
      JoinCode,
      deal,
      Deal
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;
