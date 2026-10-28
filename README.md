# 고양이 탐정 사무소 — 소개 / 개인정보처리방침 사이트

정적 사이트입니다 (HTML + CSS + 약간의 JS, 빌드 불필요). 한국어/영어 전환 지원.

## 게시 전에 꼭 바꿀 것
`index.html`, `privacy.html` 에서 아래 두 문구를 실제 값으로 교체하세요.
- `DEVELOPER_NAME_HERE` → 개발자(본인) 이름 또는 활동명
- `CONTACT_EMAIL_HERE` → 공개해도 되는 문의 이메일 (공개되는 정보이므로 개인 메일 대신 전용 메일 권장)

## GitHub Pages 로 게시
1. GitHub에서 **새 공개(public) 저장소**를 만든다 (예: `cat-detective-site`). 게임 소스 저장소와 분리하면 소스를 비공개로 둘 수 있다
2. 이 `site/` 폴더 안의 **파일 전체**를 새 저장소 맨 위(루트)에 올린다 (`.nojekyll` 포함)
3. 저장소 **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`** 저장
4. 1~2분 뒤 `https://<GitHub사용자명>.github.io/<저장소명>/` 으로 접속된다
5. 구글 플레이 콘솔에 넣을 주소
   - 개발자 웹사이트: 위 메인 주소
   - 개인정보처리방침 URL: 위 주소 + `privacy.html`

## 주의
- `privacy.html` 은 **초안**이며 법률 자문이 아닙니다. 광고(AdMob) 연동 후 실제 수집 항목, 앱 설정, 구글 플레이 데이터 보안 양식과 일치하는지 반드시 다시 확인하세요
- 비공개 저장소의 GitHub Pages는 요금제에 따라 지원되지 않을 수 있습니다
- 사이트의 일러스트는 게임 이미지를 그대로 사용했습니다 (`images/`). 글꼴 라이선스 파일은 `fonts/`
