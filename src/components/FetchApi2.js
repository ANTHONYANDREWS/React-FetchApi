import React,{useState, useEffect} from 'react'

const fetchNextPost = async(postId)=>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    const post = await res.json()
    return post;
}

function FetchApi2() {
    const[currentPostId, setCurrentPostId] = useState(1);
    const[listOfPosts, setListOfPosts] = useState([]);

    useEffect(()=>{
        fetchNextPost(1).then((post)=>{
            setListOfPosts([post]);
            setCurrentPostId(2);
        })
    },[]);

    const handleChange = () =>{
        fetchNextPost(currentPostId).then((post)=>{
            setListOfPosts((listOfPosts)=>[...listOfPosts, post])
            setCurrentPostId((currentPostId)=> currentPostId+1)
        })
    }

  return (
    <div>
      {currentPostId <=100 && (
        <button onClick={handleChange}>Fetch Next Post</button>
      )}
      {listOfPosts.map((post)=>(
        <div key={post.id}>
            <h1>{post.id}. {post.title}</h1>
            <span>{post.body}</span>
        </div>
      ))
      }
    </div>
  )
}

export default FetchApi2
