import imgExpressYourselfInVoicerooms from "figma:asset/0c27ba23e6475f118e944d69daa62758bdd3c049.png";

export function MomentsSection() {
  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-20 overflow-hidden">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "var(--text-primary)"
            }}>
              모멘츠
            </div>
            
            <h2 style={{
              fontSize: "54px",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.11",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>모멘츠</span>의 세계
            </h2>
            
            <div className="space-y-4">
              <p style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                버튼 클릭 한 번으로 모든 언어의 원어민과 연결할 수 있다면 어떨까요? 모멘츠<br />
                포스트를 사용하면 바로 그렇게 할 수 있습니다.
              </p>
              
              <p style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                언어, 문화 또는 여행에 대한 업데이트를 공유하거나 질문을 하면, 원어민들이<br />
                이를 보고 코멘트를 달 수 있습니다.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <img 
                src={imgExpressYourselfInVoicerooms} 
                alt="Moments"
                className="w-full h-auto object-contain"
                style={{ maxHeight: "800px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
