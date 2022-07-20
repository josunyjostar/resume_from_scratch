module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
};

//   devtool: 'eval-source-map', 각 모듈을 eval()으로 실행되고 소스맵을 eval()에 DataUrl로 추가합니다. 처음에는 느리지만, 리빌드를 빠르게 제공하고 실제 파일을 생성합니다. 줄 번호는 원본 코드에 매핑되므로 올바르게 매핑됩니다. 최고 품질의 개발용 소스맵을 생성합니다.
