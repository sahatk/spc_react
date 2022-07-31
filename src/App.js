import HeaderBox from './Component/Common/HeaderBox';
import Contents from './Component/Common/Contents';
import FooterBox from './Component/Common/FooterBox';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderBox></HeaderBox>
      <Contents></Contents>
      <FooterBox></FooterBox>
    </div>
  );
}

export default App;
