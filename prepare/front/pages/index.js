import React, { useEffect } from 'react'; //next는 이 부분이 필요 없음
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
//next는 pages폴더()를 인식하여 폴더내 파일들을 전부 개별적인 페이지(컴포넌트)로 만들어준다. (코드 스플릿)

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            //window.scrollY = 스크롤 얼마나 내렸는지
            //document.documentElement.clientHeight = 화면에 보이는 위 지점부터 아래지점까지의 길이(높이)
            //document.documentElement.scrollHeight = 화면에 보이지 않는 곳까지 총 길이(높이)
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if(hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => { //데이터가 쌓이기 때문에 항상 이벤트 제거를 하는 리턴을 작성해야한다!
            window.removeEventListener('scroll', onScroll);
        }
    }, [hasMorePosts, loadPostsLoading]);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
}

export default Home;