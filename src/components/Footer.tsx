import imgHelloTalkLogo from "figma:asset/60d5155c92d97be3f7901d9c995d35829bb6b849.png";
import imgAIgrammarLogo from "figma:asset/e6cdb77c41c625bf39dc6699e4c647ec28f7d9e6.png";
import imgHelloWordsLogo from "figma:asset/ca58f2be938ada1cba733e1b6af9b552f229a8cc.png";
import imgEnglishStoriesLogo from "figma:asset/5bb64109ffeec8425a11cb0555e3615732fc9274.png";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#f7f7f7] py-16 lg:py-20">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <img 
                src={imgHelloTalkLogo} 
                alt="HelloTalk Logo"
                className="h-10 w-auto"
              />
              <p style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: "1.5"
              }}>
                전 세계 사람들과 언어를 교환하고 문화를 배우세요
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  style={{ backgroundColor: "var(--bg-gray)" }}
                >
                  <Facebook className="w-5 h-5" style={{ color: "var(--brand-purple)" }} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  style={{ backgroundColor: "var(--bg-gray)" }}
                >
                  <Twitter className="w-5 h-5" style={{ color: "var(--brand-purple)" }} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  style={{ backgroundColor: "var(--bg-gray)" }}
                >
                  <Instagram className="w-5 h-5" style={{ color: "var(--brand-purple)" }} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  style={{ backgroundColor: "var(--bg-gray)" }}
                >
                  <Youtube className="w-5 h-5" style={{ color: "var(--brand-purple)" }} />
                </button>
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h4 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "16px"
              }}>
                제품
              </h4>
              <ul className="space-y-3">
                {["기능", "가격", "다운로드", "블로그"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#"
                      className="hover:underline"
                      style={{
                        fontSize: "16px",
                        color: "var(--text-secondary)"
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "16px"
              }}>
                회사
              </h4>
              <ul className="space-y-3">
                {["회사 소개", "채용", "파트너십", "연락처"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#"
                      className="hover:underline"
                      style={{
                        fontSize: "16px",
                        color: "var(--text-secondary)"
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "16px"
              }}>
                지원
              </h4>
              <ul className="space-y-3">
                {["도움말 센터", "커뮤니티", "개인정보 보호", "이용약관"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#"
                      className="hover:underline"
                      style={{
                        fontSize: "16px",
                        color: "var(--text-secondary)"
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Related Apps */}
          <div className="border-t pt-12" style={{ borderColor: "var(--bg-gray)" }}>
            <div style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              HelloTalk 제품군
            </div>
            <div className="flex flex-wrap gap-8">
              <img src={imgHelloTalkLogo} alt="HelloTalk" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src={imgAIgrammarLogo} alt="AI Grammar" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src={imgHelloWordsLogo} alt="HelloWords" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src={imgEnglishStoriesLogo} alt="English Stories" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: "var(--bg-gray)" }}>
            <p style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              opacity: 0.7
            }}>
              © 2025 HelloTalk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
