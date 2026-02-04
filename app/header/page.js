'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Header() {

  //1.상태변수 선언
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleMenuOpen, setToggleMenuOpen] = useState(false);

  //2.페이지 로딩시 토큰값을 한번만 불러온다.
  useEffect(() => {
    //토큰이 있으면 로그인 상태로 간주한다.
    const token = localStorage.getItem('token');
    //상태함수에 token값을 넣어서 
    //토큰이 있으면 로그인상태 true
    //토큰이 없으면 로그인상태 false
    setIsLoggedIn(!!token);//!! == 삼항조건연산자
  }, []);
  return (
    <header>
      <div class="logo_icon">
        <i class="fas fa-user"></i>
        <h1>
          {/* next.js에서 이미지 넣기 방법 1.(권장/상단에 선언)*/}

          <Image
            src="/images/logo.png"
            alt="상단로고"
            width={237}
            height={50}
          />
          {/* next.js에서 이미지 넣기 방법 2. */}
          {/* <img src="/images/logo.png" alt="상단로고" /> */}

        </h1>
        <i class="fas fa-bars" onClick={() => {
          setMenuOpen(true)
        }}></i>
      </div>


      <div class="toggle_nav" style={{ right: menuOpen ? '0%' : '-100%' }}>
        <i class="fas fa-times" onClick={() => setMenuOpen(false)}></i>

        <ul class="toggle_menu">
          <li onClick={() => setToggleMenuOpen(true)}>ESPRESSO BAR
            <ul style={{ display: toggleMenuOpen ? 'block' : 'none' }}>
              <li>ESPRESSO BAR</li>
              <li>CENTRO</li>
            </ul>
          </li>
          <li>PASCUCCI</li>
          <li>MENU</li>
          <li>NEWS</li>
          <li>CUSTOMER</li>
        </ul>
        <nav>
          {isLoggedIn ? (
            <>
              <Link href='../logout'>로그아웃</Link></>
          ) : (
            <>
              <Link href='../login'>로그인</Link>&#10072; &nbsp;
              <Link href='../register'>회원가입</Link>
            </>
          )
          }
        </nav>
      </div>
    </header >
  );
}

export default Header;