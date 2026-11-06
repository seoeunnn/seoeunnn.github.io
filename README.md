# seoeunnn.github.io

## 로컬 개발 (Windows PowerShell)

RubyInstaller+Devkit 3.3과 Bundler가 필요합니다. 설치 직후에는 새 터미널을 여세요.

```powershell
cd D:\seoeunnn.github.io
ruby -v
bundle -v
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

브라우저에서 http://127.0.0.1:4000/ 에 접속합니다. 종료는 `Ctrl+C`입니다.
일반적인 글·스타일 수정은 자동으로 다시 빌드됩니다. 브라우저를 새로고침하세요.
`_config.yml`을 수정했다면 서버를 종료한 뒤 다시 실행하세요.
의존성을 변경하지 않았다면 다음 실행부터 `bundle install`은 생략할 수 있습니다.

Ruby 명령을 찾지 못하면 현재 터미널에 설치 경로를 추가하세요.

```powershell
$env:Path = 'D:\Ruby33-x64\bin;' + $env:Path
```

`github-pages` 232 계열로 GitHub Pages의 Jekyll 3.10.0과 맞춥니다.
Windows 파일 감지용 `wdm`은 Windows에서만 설치됩니다.
`Gemfile.lock`은 설치한 의존성 버전을 기록합니다.
원격 테마 다운로드에는 인터넷 연결이 필요합니다.
Windows와 Linux는 파일명 대소문자 처리가 다르므로 링크와 실제 파일명의 대소문자를 맞추세요.
로컬은 development 환경이며, 배포용 확인은 다음 명령으로 할 수 있습니다.

```powershell
$env:JEKYLL_ENV = 'production'
$env:PAGES_REPO_NWO = 'seoeunnn/seoeunnn.github.io'
bundle exec jekyll build
Remove-Item Env:JEKYLL_ENV
Remove-Item Env:PAGES_REPO_NWO
```

`_site`, 캐시 및 로컬 Bundler 설정은 Git에서 제외합니다.
