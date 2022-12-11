import React from 'react'; //next는 이 부분이 필요 없음
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
//next는 pages폴더()를 인식하여 폴더내 파일들을 전부 개별적인 페이지(컴포넌트)로 만들어준다. (코드 스플릿)

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
}

export default Home;