import React,{useState,useEffect}from "react";


function UseEffectHook(){

    const [post,setPost]= useState("post");

    useEffect(() => {

        console.log("render only after initial render only");

    }, []);

    useEffect(() => {
        console.log("This run after  every time when post is changed");
        return () => {
            console.log("This run before upper console log('cleanup function'),so we can use this to manage async functions");

        };
    }, [post]);



    return(
        <div>
            <button onClick = {()=>setPost("post")}>POST</button>
            <button onClick = {()=>setPost("comment")}>COMMENT</button>
            <h3>{post}</h3>


    </div>)





}

export default UseEffectHook;