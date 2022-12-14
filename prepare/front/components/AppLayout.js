import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);  //리듀서를 사용하여 useState를 사용하여 저장할 필요 없음.
    const { me } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="#" target="_blank" rel="noreferrer noopener">Made by wsJeong</a>
                </Col>
            </Row>
        </div>
    );
};

//children은 node타입 react의 node(화면에 그릴 수 있는 즉 return안에 들어갈 수 있는 것들이 node를 뜻함)
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout; 