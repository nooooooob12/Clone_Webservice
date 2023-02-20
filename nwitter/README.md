# 1. 프로젝트 생성 
npx create-react-app project name

1-2. firebase 연동
npm i firebase@9.6.1
src dir -> firebase 파일 생성 -> CDN const로 변수 생성 이후 export default firebase.initializeApp(firebaseConfig)를 통해 파이어베이스 모듈을 임폴트 시킬 준비 완료

1.3 index.js에 firebase파일을 연동하여 firebase 환경에서의 webPage 구성 완료

1.4 .env 파일 생성은 선택!
보안을 위함, 하지만 완벽한 것은 아니고
서비스를 위한 빌드 ->  github에 올리기 위함?
