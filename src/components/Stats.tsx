import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2F653353E460A446Cc93C5861712Fd6720 from "figma:asset/1d0131c601dad2f47fff7ce9903df333b5834d35.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fb7Ba6107751E4Febb5D50014820C3638 from "figma:asset/473bfa88cd195cffed664795f514f15e98a19005.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Ffba8182186884F738D9B4E46Eb561B29 from "figma:asset/a899c19dcb0db9aaa4769f01da3b9509e75ccf6e.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fbfce4Bfc00Df49E1Baeabf1321002Aff from "figma:asset/4d56f17b4720320080dfb026530c62f20a3fe238.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Ff1Dec60Ea7Ef4A7F807D5499B1E76359 from "figma:asset/6e40705fe81681d2089990eba624a28881c01859.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fccd7C58Eec6F4D29B1Eef15E0976C6De from "figma:asset/a1a318ae212731fc9092e1144cbe179b7a3023a4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const languages = [
  { name: "English", flag: imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2F653353E460A446Cc93C5861712Fd6720 },
  { name: "Chinese", flag: imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fb7Ba6107751E4Febb5D50014820C3638 },
  { name: "Japanese", flag: imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Ffba8182186884F738D9B4E46Eb561B29 },
  { name: "Korean", flag: imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fbfce4Bfc00Df49E1Baeabf1321002Aff },
  { name: "Spanish", flag: imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Ff1Dec60Ea7Ef4A7F807D5499B1E76359 },
  { name: "French", flag: imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fccd7C58Eec6F4D29B1Eef15E0976C6De }
];

export function Stats() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <div className="text-center space-y-2">
              <div style={{
                fontSize: "35px",
                fontWeight: "700",
                color: "var(--text-secondary)",
                fontFamily: "'Inter', sans-serif"
              }}>
                60M+
              </div>
              <div style={{
                fontSize: "16px",
                opacity: 0.7,
                color: "black"
              }}>
                글로벌 사용자
              </div>
            </div>
            
            <div className="text-center space-y-2 border-l border-r border-gray-200">
              <div style={{
                fontSize: "35px",
                fontWeight: "700",
                color: "var(--text-secondary)",
                fontFamily: "'Inter', sans-serif"
              }}>
                200+
              </div>
              <div style={{
                fontSize: "16px",
                opacity: 0.7,
                color: "black"
              }}>
                국가/지역
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div style={{
                fontSize: "35px",
                fontWeight: "700",
                color: "var(--text-secondary)",
                fontFamily: "'Inter', sans-serif"
              }}>
                180+
              </div>
              <div style={{
                fontSize: "16px",
                opacity: 0.7,
                color: "black"
              }}>
                언어 지원
              </div>
            </div>
          </div>
          
          {/* Language Carousel */}
          <div className="relative">
            <div className="flex justify-center items-center gap-4 mb-8">
              <button 
                className="bg-white rounded-full w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: "var(--text-secondary)" }} />
              </button>
              
              <button 
                className="bg-white rounded-full w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
              >
                <ChevronRight className="w-6 h-6" style={{ color: "var(--text-secondary)" }} />
              </button>
            </div>
            
            <div className="flex justify-center gap-8 lg:gap-16 flex-wrap">
              {languages.map((lang) => (
                <div key={lang.name} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                  </div>
                  <div style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {lang.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Heading */}
          <div className="text-center space-y-6">
            <h2 style={{
              fontSize: "64px",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.125",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>글로벌</span> 언어 및 문화 교류
            </h2>
            <p style={{
              fontSize: "22px",
              color: "var(--text-secondary)",
              maxWidth: "650px",
              margin: "0 auto"
            }}>
              언어를 배우고, 새로운 문화를 탐험하고, 해외에서 친구를 사귀세요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
