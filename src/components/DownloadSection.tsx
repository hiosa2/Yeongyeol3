import imgQrcode from "figma:asset/51cd7e6601300dc3834437ef1ea2a5616e4609ae.png";
import imgDownload from "figma:asset/0ceea2bf28bc700cf6c8c349bb02c9d89d6ac959.png";
import imgSpanStyleColor7A54FfSpan from "figma:asset/732cdbef42e6f6dc1b8ac2006ca8920f7d2c2f7c.png";
import { Smartphone, Download } from "lucide-react";

export function DownloadSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 style={{
              fontSize: "54px",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.2",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>지금</span> 다운로드하세요
            </h2>
            <p style={{
              fontSize: "20px",
              color: "var(--text-secondary)",
              marginTop: "16px"
            }}>
              iOS와 Android에서 무료로 이용 가능합니다
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - App Preview */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={imgDownload} 
                  alt="HelloTalk App"
                  className="w-full max-w-[400px] h-auto"
                />
              </div>
            </div>
            
            {/* Right - Download Options */}
            <div className="space-y-8">
              {/* QR Code */}
              <div className="flex flex-col items-center lg:items-start gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <img 
                    src={imgQrcode} 
                    alt="QR Code"
                    className="w-40 h-40"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <div style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                    marginBottom: "8px"
                  }}>
                    QR 코드 스캔
                  </div>
                  <div style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    opacity: 0.7
                  }}>
                    모바일 기기로 스캔하여 다운로드
                  </div>
                </div>
              </div>
              
              {/* Download Buttons */}
              <div className="space-y-4">
                <button 
                  className="w-full lg:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                  style={{
                    fontSize: "18px",
                    fontWeight: "600"
                  }}
                >
                  <Download className="w-6 h-6" />
                  App Store에서 다운로드
                </button>
                
                <button 
                  className="w-full lg:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "var(--brand-purple)",
                    fontSize: "18px",
                    fontWeight: "600"
                  }}
                >
                  <Download className="w-6 h-6" />
                  Google Play에서 다운로드
                </button>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-light-gray)" }}>
                    <Smartphone className="w-6 h-6" style={{ color: "var(--brand-purple)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>
                      무료 다운로드
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)", opacity: 0.7 }}>
                      완전 무료
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-light-gray)" }}>
                    <div style={{ fontSize: "20px", fontWeight: "700", color: "var(--brand-purple)" }}>
                      60M+
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>
                      글로벌 사용자
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)", opacity: 0.7 }}>
                      전 세계에서
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
