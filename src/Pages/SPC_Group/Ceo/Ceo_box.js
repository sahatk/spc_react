import React from 'react'

import './Ceo_box.css'

function Ceo_box() {
  return (
    <section id="ceo_box">
        <div className="container">
            <div className="ceo_title">
                <h2>CEO 인사말</h2>
                <p className="desc">건강과 행복 추구로 전 세계인에게 사랑받는 SPC그룹이 되겠습니다.</p>
            </div>
            <div className="ceo_content">
                <div className="img_wrap">
                    <div className="ceo_image"><h2 className="blind">ceo 이미지</h2></div>
                </div>
                <div className="main_text">
                    <p>SPC그룹이 걸어온 길은 정직한 맛으로 행복한 세상을 만들기 위해 노력해온 도전과 혁신의 역사였습니다. 최고의 제품을 만들기 위해 끊임없는 연구 개발에 끊임없는 노력을
                        쏟아왔을 뿐만
                        아니라, 차별화된 마케팅을 펼쳐 SPC삼립과 파리바게뜨, 배스킨라빈스, 던킨 등 다양한 브랜드를 국내 업계의 독보적인 1위 브랜드로 성장시켰습니다. 또한 미국, 중국,
                        프랑스,
                        싱가포르, 베트남, 캄보디아 등 글로벌 시장에 진출해 한국 베이커리의 우수성을 세계에 널리 알리고 있습니다.</p>
                    <br />
                    <p>SPC그룹은 지금까지 쌓아온 성과와 역량을 바탕으로 새롭게 도약하고자 합니다. 2030년까지 매출 20조원의 ‘그레이트 푸드 컴퍼니(Great Food Company)’로
                        성장하는
                        비전을 향해 나아가고 있습니다. 시대를 앞서 통찰하고 변화를 선도해온 SPC그룹에게는 그 길이 행복한 세상을 앞당기는 가슴 설레는 도전이 될 것이라 믿습니다.</p>
                    <br />
                    <p>또한 SPC그룹은 기업의 사회적 책임을 다하기 위해 최선의 노력을 다할 것입니다. 이미 SPC행복한재단, SPC해피봉사단을 중심으로 다양한 활동을 펼치고 있습니다. 대리점과
                        가맹점이
                        동반 성장할 수 있도록 지원하고 있으며, 매장에서 일하는 아르바이트생들도 꿈을 펼칠 수 있도록 돕고 있습니다. 나아가 우리사회의 소외된 이웃들을 위해서도 나눔과 상생을 적극
                        실천하고 있습니다.</p>
                    <br />
                    <p>SPC그룹은 세계인에게 사랑 받는 글로벌 기업이 되기 위한 도전을 멈추지 않을 것입니다. 아울러 언제나 최고의 맛, 즐거운 감동을 전하며 세상을 더욱 건강하고 행복하게
                        만들어가겠습니다.</p>
                    <br />
                    <p>감사합니다</p>
                    <div className="ceo_sign_wrap">
                        <span className="ceo_sign"><strong>회장 허영인</strong></span>
                        <span className="ceo_sign_image">
                            <h3 className="blind">SIGN 이미지</h3>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ceo_box