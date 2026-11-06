(() => {
  const variants = {
    'font-a': ['Wanted Sans Variable', 'Wanted Sans Variable'],
    'font-b': ['LINE Seed Sans KR', 'Pretendard'],
    'font-c': ['Gmarket Sans', 'SUIT'],
    'font-d': ['SUIT', 'SUIT']
  };
  const pair = Object.entries(variants).find(([name]) => document.body.classList.contains(name))?.[1];
  const status = document.getElementById('font-load-status');
  if (!pair || !status) return;
  const requests = [[pair[0], 700], [pair[1], 400], ['JetBrains Mono', 400]];
  Promise.all(requests.map(async ([font, weight]) => {
    const faces = await document.fonts.load(`${weight} 16px "${font}"`, font === 'JetBrains Mono' ? 'const 0123' : '개발 Security 0123');
    if (!faces.length) throw new Error(font);
  })).then(() => {
    status.textContent = '웹폰트 로딩 완료';
  }).catch(() => {
    status.textContent = '웹폰트 로딩 실패 — 네트워크 연결을 확인해 주세요.';
  });
})();
