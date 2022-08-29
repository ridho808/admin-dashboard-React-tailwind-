import SideBar from "../component/SideBar";
import React, { useEffect, useState } from 'react'
import { BsImages } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Selectmulti from "../component/selectmulti";

export default function AddNews() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
     );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <SideBar>
        <div className="max-w-full mx-auto my-5 bg-white">
               <h1 className="font-bold text-xl text-sky-800 p-4 ">Add news or Article</h1>
               <div className="max-w-[80%] mx-auto">
                <label className="font-semibold text-lg text-gray-700">Category</label>
                <select className="max-w-full w-full h-12 bg-white text-black border-2 border-gray-700 rounded-lg">
                    <option selected>Pilih kategori</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
                {/* title */}
                <label className="font-semibold text-lg text-gray-700">Title</label>
                <input type="text" name="title" id="title" placeholder="Masukkan Title.." className="max-w-full w-full h-12 bg-white text-black border-2 p-2 border-gray-700 rounded-lg" />
                {/* Meta title */}
                <label className="font-semibold text-lg text-gray-700">Meta Title</label>
                <input type="text" name="title" id="title" placeholder="Masukkan Meta Title.." className="max-w-full w-full h-12 bg-white text-black border-2 p-2 border-gray-700 rounded-lg" />
                {/* Meta Desc */}
                <label className="font-semibold text-lg text-gray-700">Meta Desc</label>
                <input type="text" name="title" id="title" placeholder="Masukkan Meta description.." className="max-w-full w-full h-12 bg-white text-black border-2 p-2 border-gray-700 rounded-lg" />
                {/* Slug */}
                <label className="font-semibold text-lg text-gray-700">Slug</label>
                <input type="text" name="title" id="title" placeholder="Masukkan Slug.." className="max-w-full w-full h-12 bg-white text-black border-2 p-2 border-gray-700 rounded-lg" />
                {/* Intro */}
                <label className="font-semibold text-lg text-gray-700">Intro</label>
                <input type="text" name="title" id="title" placeholder="Masukkan Intro.." className="max-w-full w-full h-12 bg-white text-black border-2 p-2 border-gray-700 rounded-lg"/>
                {/* file Upload */}
                <label className="font-semibold text-lg text-gray-700">Cover Image</label>
                <div className="w-[75%] sm:w-[200px] h-[120px] border-2 border-dotted rounded-xl border-gray-700 flex flex-col items-center justify-center">
                    <input type="file" name="file" id="file" className="hidden"/>
                    <label htmlFor="file" className=""><BsImages size={80} fill="black"/></label>
                    <span className="text-sm text-gray-700 font-semibold">Tambahkan Gambar</span>
                </div>
                {/*  */}
                <label className="font-semibold text-lg text-gray-700">Content</label>
                <div className="min-h-[450px] border-2 border-gray-700 mt-3 text-black ">
                    <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    />
                </div>
                  <label className="font-semibold text-lg text-gray-700">Tag</label>
                  <div className="text-black">
                   <Selectmulti/>
                  </div>
                  <label className="font-semibold text-lg text-gray-700">Post Schedule</label>
                  <div className="flex flex-col max-w-full w-full justify-between md:flex-row text-gray-800 font-semibold">
                    <div>
                      <label>Select Date</label>
                      <br />
                    <input type="date" name="date" id="date" className="max-w-full w-full md:w-[250px] lg:w-[350px] h-12 rounded-md border-2 border-gray-700"/>  
                    </div>
                    <div>
                      <label>Select Time</label>
                      <br />
                    <input type="time" name="time" id="time" className="max-w-full w-full md:w-[250px] lg:w-[350px] h-12 rounded-md border-2 border-gray-700"/>
                    </div>
                  </div>
                  <label className="font-semibold text-lg text-gray-700">Status</label>
                  <div className="text-black">
                   <Selectmulti/>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full h-[100px] mt-6 justify-end gap-3 mx-auto">
                      <button className="btn btn-outline btn-black w-[200px]">Save as Draf</button>
                      <button className="btn btn-info w-[200px]">Submit</button>
                  </div> 
               </div>
        </div>
    </SideBar>
  )
}
