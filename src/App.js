import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchPosts } from "./redux/slices/postSlices";


function App() {

  const dispatch = useDispatch();
  const { postsList , loading, error } = useSelector(state => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  return (
    <div className="App">
      <h1>Posts</h1>
      { loading && <h2>loading...</h2> }
      { error && <h2> {error} </h2> }
      { postsList && 
        postsList.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default App;
