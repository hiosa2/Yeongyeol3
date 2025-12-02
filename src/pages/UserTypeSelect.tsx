import { useState } from "react";
import { useNavigate } from "react-router";
import { Plane, Home, ArrowLeft, User, Users } from "lucide-react";
import { Logo } from "../components/Logo";

export function UserTypeSelect() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<"traveler" | "local" | null>(null);

  const handleBack = () => {
    if (selectedType) {
      setSelectedType(null);
    } else {
      navigate("/");
    }
  };

  const handleGroupTypeSelect = (groupType: "solo" | "group") => {
    if (selectedType === "traveler") {
      navigate(`/traveler-form?type=${groupType}`);
    } else if (selectedType === "local") {
      navigate(`/local-form?type=${groupType}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container-hellotalk mx-auto px-4 lg:px-12 py-8">
        <div className="max-w-[900px] mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            돌아가기
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo size={50} variant="icon" />
          </div>

          {/* Step 1: User Type Selection */}
          {!selectedType && (
            <>
              {/* Title */}
              <div className="text-center mb-8">
                <h2
                  style={{
                    fontSize: "clamp(28px, 7vw, 48px)",
                    fontWeight: "700",
                    fontFamily: "var(--font-heading)",
                    lineHeight: "1.2",
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                  }}
                >
                  당신은 누구신가요?
                </h2>
                <p
                  style={{
                    fontSize: "clamp(14px, 4vw, 16px)",
                    color: "var(--text-secondary)",
                  }}
                >
                  해당하는 유형을 선택해주세요
                </p>
              </div>

              {/* Selection Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Traveler Card */}
                <button
                  onClick={() => setSelectedType("traveler")}
                  className="group relative p-6 rounded-3xl border-2 transition-all active:scale-95"
                  style={{
                    borderColor: "var(--bg-gray)",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--brand-purple)";
                    e.currentTarget.style.backgroundColor = "var(--bg-light-gray)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--bg-gray)";
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--bg-light-gray)",
                      }}
                    >
                      <Plane
                        className="w-10 h-10"
                        style={{ color: "var(--brand-purple)" }}
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "clamp(24px, 6vw, 28px)",
                          fontWeight: "700",
                          color: "var(--text-primary)",
                          marginBottom: "8px",
                        }}
                      >
                        여행객
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(13px, 3.5vw, 15px)",
                          color: "var(--text-secondary)",
                          lineHeight: "1.5",
                        }}
                      >
                        한국을 여행하는 외국인 또는
                        <br />
                        새로운 친구를 찾는 외국인 여행자
                      </div>
                    </div>

                    <div className="pt-2">
                      <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                        style={{
                          backgroundColor: "var(--brand-purple)",
                          color: "white",
                          fontSize: "clamp(14px, 3.5vw, 15px)",
                          fontWeight: "600",
                        }}
                      >
                        여행객으로 시작하기
                      </div>
                    </div>
                  </div>
                </button>

                {/* Local Card */}
                <button
                  onClick={() => setSelectedType("local")}
                  className="group relative p-6 rounded-3xl border-2 transition-all active:scale-95"
                  style={{
                    borderColor: "var(--bg-gray)",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--brand-purple)";
                    e.currentTarget.style.backgroundColor = "var(--bg-light-gray)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--bg-gray)";
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--bg-light-gray)",
                      }}
                    >
                      <Home
                        className="w-10 h-10"
                        style={{ color: "var(--brand-purple)" }}
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "clamp(24px, 6vw, 28px)",
                          fontWeight: "700",
                          color: "var(--text-primary)",
                          marginBottom: "8px",
                        }}
                      >
                        현지인
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(13px, 3.5vw, 15px)",
                          color: "var(--text-secondary)",
                          lineHeight: "1.5",
                        }}
                      >
                        외국인 친구를 만들고 싶은
                        <br />
                        한국 현지인 (언어 교환, 문화 교류)
                      </div>
                    </div>

                    <div className="pt-2">
                      <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                        style={{
                          backgroundColor: "var(--brand-purple)",
                          color: "white",
                          fontSize: "clamp(14px, 3.5vw, 15px)",
                          fontWeight: "600",
                        }}
                      >
                        현지인으로 시작하기
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Info Text */}
              <div className="mt-8 text-center">
                <p
                  style={{
                    fontSize: "clamp(12px, 3vw, 14px)",
                    color: "var(--text-secondary)",
                    opacity: 0.7,
                  }}
                >
                  선택하신 유형에 따라 맞춤형 매칭 서비스를 제공합니다
                </p>
              </div>
            </>
          )}

          {/* Step 2: Group Type Selection */}
          {selectedType && (
            <>
              {/* Title */}
              <div className="text-center mb-8">
                <h2
                  style={{
                    fontSize: "clamp(28px, 7vw, 48px)",
                    fontWeight: "700",
                    fontFamily: "var(--font-heading)",
                    lineHeight: "1.2",
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                  }}
                >
                  여행 형태를 선택해주세요
                </h2>
                <p
                  style={{
                    fontSize: "clamp(14px, 4vw, 16px)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {selectedType === "traveler" ? "여행객" : "현지인"}으로 참여하시는 형태를 알려주세요
                </p>
              </div>

              {/* Group Type Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Solo Card */}
                <button
                  onClick={() => handleGroupTypeSelect("solo")}
                  className="group relative p-6 rounded-3xl border-2 transition-all active:scale-95"
                  style={{
                    borderColor: "var(--bg-gray)",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--brand-purple)";
                    e.currentTarget.style.backgroundColor = "var(--bg-light-gray)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--bg-gray)";
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--bg-light-gray)",
                      }}
                    >
                      <User
                        className="w-10 h-10"
                        style={{ color: "var(--brand-purple)" }}
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "clamp(24px, 6vw, 28px)",
                          fontWeight: "700",
                          color: "var(--text-primary)",
                          marginBottom: "8px",
                        }}
                      >
                        솔로
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(13px, 3.5vw, 15px)",
                          color: "var(--text-secondary)",
                          lineHeight: "1.5",
                        }}
                      >
                        혼자 여행하거나
                        <br />
                        1:1 매칭을 원하시는 분
                      </div>
                    </div>

                    <div className="pt-2">
                      <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                        style={{
                          backgroundColor: "var(--brand-purple)",
                          color: "white",
                          fontSize: "clamp(14px, 3.5vw, 15px)",
                          fontWeight: "600",
                        }}
                      >
                        솔로로 시작하기
                      </div>
                    </div>
                  </div>
                </button>

                {/* Group Card */}
                <button
                  onClick={() => handleGroupTypeSelect("group")}
                  className="group relative p-6 rounded-3xl border-2 transition-all active:scale-95"
                  style={{
                    borderColor: "var(--bg-gray)",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--brand-purple)";
                    e.currentTarget.style.backgroundColor = "var(--bg-light-gray)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--bg-gray)";
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--bg-light-gray)",
                      }}
                    >
                      <Users
                        className="w-10 h-10"
                        style={{ color: "var(--brand-purple)" }}
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "clamp(24px, 6vw, 28px)",
                          fontWeight: "700",
                          color: "var(--text-primary)",
                          marginBottom: "8px",
                        }}
                      >
                        그룹
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(13px, 3.5vw, 15px)",
                          color: "var(--text-secondary)",
                          lineHeight: "1.5",
                        }}
                      >
                        친구들과 함께 여행하거나
                        <br />
                        그룹 매칭을 원하시는 분
                      </div>
                    </div>

                    <div className="pt-2">
                      <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                        style={{
                          backgroundColor: "var(--brand-purple)",
                          color: "white",
                          fontSize: "clamp(14px, 3.5vw, 15px)",
                          fontWeight: "600",
                        }}
                      >
                        그룹으로 시작하기
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Info Text */}
              <div className="mt-8 text-center">
                <p
                  style={{
                    fontSize: "clamp(12px, 3vw, 14px)",
                    color: "var(--text-secondary)",
                    opacity: 0.7,
                  }}
                >
                  선택하신 형태에 맞는 최적의 매칭을 제공합니다
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
