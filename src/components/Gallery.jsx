import { useContext, useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import UploadForm from "./Uploadform";
import { Context } from "../Context";
import Firestore from "../handlers/firestore";
const {writeDoc, readDocs} = Firestore
// const photos = [

// ]
// const initialState = {
//   items: photos,
//   count: photos.length,
//   inputs:{title: null, file:null, path:null},
//   isCollapsed: false
// }
// const handleOnChange = (state,e) => {
//   if(e.target.name === 'file'){
//     return{...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])}
//   }else {
//     return{...state.inputs, title: e.target.value}
//   }
// }

// const reducer=(state, action)=>{

//   switch(action.type){
//     case 'setItem':
//     return{
//       ...state,
//       items: [state.inputs, ...state.items],
//       inputs:{title: null, file:null, path:null}

//     }
//     case 'setInputs':
//       return{
//         ...state,
//         inputs: handleOnChange(state, action.payload.value)
//       }
//       case 'collapse':
//         return{
//           ...state,
//           isCollapsed: action.payload.bool
//         }
//     default: return state
//   }
// }
const Gallery = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const { dispatch, state, read } = useContext(Context);
  const { inputs  } = state
  const [count, setCount] = useState();
  // const [inputs, setInputs] = useState({title: null, file:null, path:null})
  // const [items, setItems] = useState(photos)
  // const [isCollapsed, collapse] = useState(false)
  const toggle = (bool) =>
    dispatch({ type: "collapse", payload: { bool: !state.isCollapsed } });

  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });

  // const handleOnChange = (e) => {
  //   if(e.target.name === 'file'){
  //     setInputs({...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])})
  //   }else {
  //     setInputs({...inputs, title: e.target.value})
  //   }
  // }
  useEffect(()=>{
    readDocs().then(console.log)
  },[])
  const handleOnSubmit = (e) => {
    e.preventDefault();
    writeDoc(inputs,"stocks").then(console.log("no"))
    // setItems([inputs.path, ...items])
    dispatch({ type: "setItem" });
    // setInputs({title: null, file:null, path:null})
    // collapse(false)
    toggle(!state.isCollapsed);
  };
  useEffect(() => {
    console.log(state);
  }, [state.items]);
  useEffect(() => {
    read()
  }, []);

  useEffect(() => {
    setCount(
      `You have Uploaded ${state.items.length} image${
        state.items.length > 1 ? "s" : ""
      }`
    );
  }, [state.items]);

  return (
    <section className="text-gray-600 body-font ">
      <div className=" px-5 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-10  p-10 rounded-lg border-b-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-sky-500">
            Capture and Preserve Your Moments Privately. <br /> Your
            Personalized Photo Repository
          </h1>
          <p className=" leading-relaxed text-base">
            Our website allows you to upload and organize your photos securely,
            ensuring that your memories remain private and accessible only to
            you. With advanced search capabilities, finding specific photos
            within your collection is a breeze. Enjoy the peace of mind knowing
            that your cherished moments are safely stored and easily retrievable
            whenever you need them. Join us and start curating your personal
            gallery today!
          </p>
        </div>
        <div className="text-right">
          <button
            className="py-2 px-9 bg-cyan-500 rounded mb-10 font-bold font-mono text-white mr-10 text-center"
            onClick={() => toggle(!state.isCollapsed)}
          >
            {state.isCollapsed ? "close" : "+ Add"}
          </button>
        </div>
        <UploadForm
          isVisible={state.isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          inputs={state.inputs}
        />
        {count}
        <div className="flex flex-wrap -m-4">
          {state.items.map((item, i) => (
            <ImageCard key={i} photo={item.path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
