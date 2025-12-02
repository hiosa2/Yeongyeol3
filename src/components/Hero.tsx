import imgTalkToTheWorld from "figma:asset/222ab0f6f98495892f70e142237a730e424d9ad3.png";

export function Hero() {
  return (
    <section className="relative min-h-[953px] bg-white overflow-hidden">
      <div className="container-hellotalk mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-[54px] lg:text-[80px] leading-[1.1]" style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "700",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>세상</span>과 대화하기
            </h1>
            
            <p className="text-[18px] lg:text-[20px] leading-[1.4]" style={{
              color: "var(--text-secondary)",
              maxWidth: "414px"
            }}>
              전 세계 원어민과 채팅하며 무료로 언어 배우기
            </p>
            
            <button 
              className="btn-xlarge"
              style={{
                backgroundColor: "var(--brand-purple)",
                color: "white",
                borderRadius: "var(--radius-full)",
                padding: "14px 32px",
                fontSize: "20px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "var(--transition-default)",
                boxShadow: "0px 1px 2px 0px rgba(58, 16, 57, 0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0px 4px 12px 0px rgba(122, 84, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0px 1px 2px 0px rgba(58, 16, 57, 0.05)";
              }}
            >
              지금 시작하기
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[500/633]">
              <img 
                src={imgTalkToTheWorld} 
                alt="Talk to the World"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
