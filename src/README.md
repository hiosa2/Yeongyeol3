# 🌏 YeonGyeol (연결)

> QR 기반 데이터 수집 솔로 트래블러 매칭 서비스

[![Deploy to GitHub Pages](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions/workflows/deploy.yml)

---

## 📖 프로젝트 소개

**YeonGyeol**은 솔로 여행자와 현지인을 연결하는 혁신적인 매칭 플랫폼입니다.

### ✨ 주요 기능
- 🧳 **여행자 등록** - 여행 정보, 관심사, 선호사항 등록
- 🏠 **현지인 등록** - 거주 지역, 가능 시간, 문화 교류 경험
- 📊 **관리자 대시보드** - 실시간 통계 및 사용자 관리
- 🔐 **Supabase 백엔드** - 안전한 데이터 저장 및 관리

### 🎨 디자인 시스템
- HelloTalk 디자인 시스템 기반
- 보라색(#7D58FF) 브랜드 컬러
- 완전한 원형 디자인 (9999px border-radius)
- 친근하고 활기찬 느낌의 플랫 디자인

---

## 🚀 시작하기

### 사전 요구사항
- Node.js v18 이상
- npm 또는 yarn

### 로컬 개발
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

---

## 📦 배포

### GitHub Pages 자동 배포
이 프로젝트는 GitHub Actions를 통해 자동 배포됩니다.

1. **main 브랜치에 push** → 자동 배포 시작
2. **Actions 탭에서 진행 상황 확인**
3. **배포 완료 후 사이트 접속**

자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참조하세요.

---

## 🌐 접속 URL

- **배포 사이트**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **커스텀 도메인**: `https://yourdomain.com` (설정 시)

---

## 📂 프로젝트 구조

```
yeongyeol/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 배포
├── components/                 # React 컴포넌트
│   ├── Logo.tsx
│   └── ui/                     # ShadCN UI 컴포넌트
├── pages/                      # 페이지 컴포넌트
│   ├── LandingPage.tsx        # 랜딩 페이지
│   ├── UserTypeSelect.tsx     # 사용자 유형 선택
│   ├── TravelerForm.tsx       # 여행자 등록 폼
│   ├── LocalForm.tsx          # 현지인 등록 폼
│   ├── SuccessPage.tsx        # 등록 완료
│   └── AdminPage.tsx          # 관리자 대시보드
├── supabase/
│   └── functions/
│       └── server/            # Supabase Edge Functions
│           ├── index.tsx      # API 서버
│           └── kv_store.tsx   # KV 스토어 유틸리티
├── styles/
│   └── globals.css            # 글로벌 스타일 + 디자인 시스템
├── utils/
│   ├── routes.ts              # React Router 설정
│   └── supabase/
│       └── info.tsx           # Supabase 설정
├── App.tsx                    # 메인 앱
├── vite.config.ts             # Vite 설정
├── package.json
├── DEPLOYMENT.md              # 배포 가이드
└── README.md
```

---

## 🛠 기술 스택

### Frontend
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **React Router** - 라우팅
- **Tailwind CSS** - 스타일링
- **Lucide React** - 아이콘
- **ShadCN UI** - UI 컴포넌트
- **Vite** - 빌드 도구

### Backend
- **Supabase** - BaaS (Backend as a Service)
  - Edge Functions (Deno + Hono)
  - KV Store (Key-Value 데이터베이스)
  - Authentication (향후 추가 가능)

### Deployment
- **GitHub Pages** - 정적 사이트 호스팅
- **GitHub Actions** - CI/CD 자동화

---

## 🎯 주요 라우트

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | Landing | 메인 랜딩 페이지 |
| `/select` | User Type Select | 여행자/현지인 선택 |
| `/traveler` | Traveler Form | 여행자 정보 입력 |
| `/local` | Local Form | 현지인 정보 입력 |
| `/success` | Success | 등록 완료 페이지 |
| `/admin` | Admin Dashboard | 관리자 대시보드 |

---

## 📊 API 엔드포인트

### 여행자
- `POST /make-server-39a216a3/travelers` - 여행자 등록
- `GET /make-server-39a216a3/travelers` - 모든 여행자 조회
- `GET /make-server-39a216a3/travelers/:id` - 특정 여행자 조회

### 현지인
- `POST /make-server-39a216a3/locals` - 현지인 등록
- `GET /make-server-39a216a3/locals` - 모든 현지인 조회
- `GET /make-server-39a216a3/locals/:id` - 특정 현지인 조회

### 관리자
- `GET /make-server-39a216a3/admin/dashboard` - 대시보드 데이터 (통계 + 전체 사용자)

---

## 🔐 환경 변수

Supabase 설정은 `/utils/supabase/info.tsx`에서 관리됩니다:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## 🤝 기여하기

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 라이선스

This project is licensed under the MIT License.

---

## 👥 개발자

- **YeonGyeol Team** - 초기 개발 및 디자인

---

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 [Issues](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues)를 통해 연락해주세요!

---

## 🙏 감사의 말

- [HelloTalk](https://www.hellotalk.com/) - 디자인 시스템 영감
- [Figma Make](https://www.figma.com/) - 빠른 프로토타이핑
- [Supabase](https://supabase.com/) - 백엔드 인프라
- [ShadCN UI](https://ui.shadcn.com/) - UI 컴포넌트

---

Made with ❤️ by YeonGyeol Team
