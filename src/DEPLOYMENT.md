# 🚀 GitHub Pages 배포 가이드

YeonGyeol 프로젝트를 GitHub Pages에 배포하고 커스텀 도메인을 연결하는 방법입니다.

---

## 📋 **사전 준비**

### 1. GitHub 계정 및 Repository 생성
- GitHub 계정이 필요합니다
- 새 Repository를 생성하세요 (예: `yeongyeol`)

### 2. 필요한 도구 설치
```bash
# Git 설치 확인
git --version

# Node.js 설치 확인 (v18 이상)
node --version
npm --version
```

---

## 🔧 **Step 1: 프로젝트를 GitHub에 업로드**

### 1-1. 로컬에 프로젝트 복사
Figma Make에서 생성한 모든 파일을 로컬 폴더에 복사하세요.

### 1-2. Git 초기화 및 커밋
```bash
# 프로젝트 폴더로 이동
cd your-project-folder

# Git 초기화
git init

# 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: YeonGyeol project"
```

### 1-3. GitHub Repository에 연결
```bash
# GitHub에서 생성한 repository URL로 변경하세요
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# main 브랜치로 푸시
git branch -M main
git push -u origin main
```

---

## ⚙️ **Step 2: GitHub Pages 활성화**

### 2-1. Repository 설정 변경
1. GitHub에서 Repository 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Source**: `GitHub Actions` 선택 (기본값일 수 있음)

### 2-2. 자동 배포 확인
- 코드를 push하면 자동으로 `.github/workflows/deploy.yml`이 실행됩니다
- **Actions** 탭에서 배포 진행 상황을 확인할 수 있습니다
- 배포가 완료되면 `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`에 접속 가능합니다

---

## 🌐 **Step 3: 커스텀 도메인 연결 (선택사항)**

### 3-1. 도메인 구매
- GoDaddy, Namecheap, Cloudflare, Gabia 등에서 원하는 도메인 구매
- 예: `yeongyeol.com`

### 3-2. CNAME 파일 수정
`/public/CNAME` 파일을 수정하세요:
```
yourdomain.com
```
↓ 변경
```
yeongyeol.com
```

### 3-3. DNS 설정 (도메인 제공업체에서)

**Option A: Apex 도메인 사용 (yeongyeol.com)**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**Option B: Subdomain 사용 (www.yeongyeol.com)**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**추가: CNAME 레코드 (둘 다 사용할 경우)**
```
Type: CNAME
Name: @
Value: YOUR_USERNAME.github.io
```

### 3-4. GitHub에서 커스텀 도메인 설정
1. Repository → **Settings** → **Pages**
2. **Custom domain** 섹션에 구매한 도메인 입력
   - 예: `yeongyeol.com` 또는 `www.yeongyeol.com`
3. **Save** 클릭
4. **Enforce HTTPS** 체크박스 활성화 (SSL 인증서 자동 발급)

### 3-5. vite.config.ts 수정
커스텀 도메인을 사용할 경우:
```typescript
export default defineConfig({
  // ...
  base: '/', // 커스텀 도메인 사용 시 '/'로 설정
});
```

Repository 이름으로 접속할 경우:
```typescript
export default defineConfig({
  // ...
  base: '/YOUR_REPO_NAME/', // repository 이름으로 설정
});
```

### 3-6. 변경사항 커밋 및 푸시
```bash
git add .
git commit -m "Add custom domain configuration"
git push
```

---

## ✅ **Step 4: 배포 확인**

### 4-1. DNS 전파 대기
- DNS 변경사항이 전파되는데 **최대 24-48시간** 소요될 수 있습니다
- 보통 1-2시간 내에 적용됩니다

### 4-2. DNS 전파 확인
```bash
# 터미널에서 확인
nslookup yourdomain.com

# 또는 온라인 도구 사용
# https://www.whatsmydns.net/
```

### 4-3. 사이트 접속
- **기본 URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **커스텀 도메인**: `https://yourdomain.com`

---

## 🔄 **업데이트 방법**

코드를 수정한 후:
```bash
git add .
git commit -m "Update description"
git push
```

자동으로 GitHub Actions가 실행되어 배포됩니다! (약 2-3분 소요)

---

## 🐛 **문제 해결**

### ❌ 404 에러 발생
**원인**: React Router 사용 시 새로고침하면 404 발생
**해결**: SPA를 위한 404.html 추가

`/public/404.html` 파일 생성:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>YeonGyeol</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

`/index.html`의 `<head>` 태그에 추가:
```html
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### ❌ HTTPS 인증서 오류
- **기다리기**: 인증서 발급에 최대 24시간 소요
- **확인**: GitHub Pages 설정에서 "Enforce HTTPS" 체크

### ❌ 도메인이 연결되지 않음
- DNS 설정 재확인
- CNAME 파일 확인
- DNS 전파 대기 (최대 48시간)

### ❌ 빌드 실패
- **Actions** 탭에서 에러 로그 확인
- `package.json`의 dependencies 확인
- Node 버전 확인 (v18 이상)

---

## 📚 **참고 자료**

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [커스텀 도메인 설정](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS 설정 가이드](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

---

## 💡 **추가 팁**

### 무료 도메인 옵션
- [Freenom](https://www.freenom.com/) - 무료 도메인 제공 (.tk, .ml, .ga 등)
- [Cloudflare Pages](https://pages.cloudflare.com/) - 무료 호스팅 + 도메인

### 배포 환경 변수
Supabase 설정은 빌드 시 포함되므로 추가 설정이 필요 없습니다.

### 성능 최적화
- 이미지 최적화
- 코드 스플리팅 (자동)
- CDN 활용 (GitHub Pages는 자동 CDN 제공)

---

## 🎉 **완료!**

이제 YeonGyeol이 전 세계에 공개되었습니다! 🚀

도메인: `https://yourdomain.com` (또는 `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`)

궁금한 점이 있으면 GitHub Issues에 문의하세요!
