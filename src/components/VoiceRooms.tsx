import imgExpressYourselfInVoicerooms1 from "figma:asset/777e73f8d5b88b9cb13626a349f05a0301c2d3a5.png";

export function VoiceRooms() {
  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-20 overflow-hidden">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px]">
              <img 
                src={imgExpressYourselfInVoicerooms1} 
                alt="Voice Rooms"
                className="w-full h-auto object-contain"
                style={{ maxHeight: "814px" }}
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6">
            <div 
              className="inline-block px-4 py-2 rounded-xl"
              style={{
                backgroundColor: "var(--brand-purple)",
                fontSize: "16px",
                fontWeight: "700",
                color: "white"
              }}
            >
              신규
            </div>
            
            <h2 style={{
              fontSize: "54px",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.11",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>보이스</span> 룸에서 자신을 표현<br />하세요
            </h2>
            
            <div className="space-y-4">
              <p style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                커뮤니티에서 흥미로운 주제에 대해 토론하고 HelloTalk 회원들을 만나보세요. 보이스 룸<br />
                의 유용하고 캐주얼한 공간에서 말하기와 듣기 스킬을 연습하세요.
              </p>
              
              <p style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                연습하고 싶은 언어를 설정하고, 주제를 선택한 다음, 다른 커뮤니티 회원들이 무료로 참여<br />
                할 수 있는 나만의 보이스 룸을 시작하세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
