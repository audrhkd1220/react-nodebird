import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>
    );
};

//children은 node타입 react의 node(화면에 그릴 수 있는 즉 return안에 들어갈 수 있는 것들이 node를 뜻함)
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout; 