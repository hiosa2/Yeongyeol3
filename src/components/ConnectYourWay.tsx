import imgConnectYourWay from "figma:asset/5f87baf13b76b5c9a30334253275f3faff2e1cda.png";

export function ConnectYourWay() {
  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-20">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[500/563]">
              <img 
                src={imgConnectYourWay} 
                alt="Connect Your Way"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6">
            <div style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "var(--text-primary)"
            }}>
              텍스트, 음성, 비디오 등
            </div>
            
            <h2 style={{
              fontSize: "54px",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.11",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>연결</span> 당신의 방식
            </h2>
            
            <div className="space-y-4">
              <p style={{
                fontSize: "18px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                문자, 음성 및 영상 통화, 보이스 룸, 라이브 스트림을 통해 현지인들<br />
                과 만나고 채팅하세요.
              </p>
              
              <p style={{
                fontSize: "18px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                당신에게 가장 편한 방법을 선택하세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
