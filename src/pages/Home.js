import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
    async function fetchData() {
      setAppState({ loading: true });
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setAppState({ loading: false, posts: res.data.slice(0,5) } );
    }
    
    fetchData()
  }, [setAppState]);

  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
