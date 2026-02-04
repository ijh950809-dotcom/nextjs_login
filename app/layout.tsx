export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* next.js에서 아이콘폰트 사용하기
        1)방법1.
        1. cdn주소를 복사하여 layout.tsx문서의 상단 head영역에 삽입
        2. 나오게 하고싶은 위치에
        <i class="fas fa-bars"></i>
        <i class="fas fa-times"></i>
        <i class="fas fa-user"></i>

        2)방법2.
        폰트어썸 라이브러리 설치후 사용
        1. npm install @fortawesome/fontawesome-free
        2. common.css파일에 아래 경로추가
        @import "@fortawesome/fontawesome-free/css/all.min.css";
        3. 삽입하고자 하는 문서에 작성
        <i className="fas fa-user"></i>
        */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
