import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function TravelerForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const groupType = searchParams.get("type"); // "solo" or "group"

  const [formData, setFormData] = useState({
    groupSize: "2", // 그룹일 때 인원수 (2 or 3)
    name: "",
    age: "",
    gender: "",
    nationality: "",
    snsId: "",
    stayDuration: "",
    preferredLocation: "",
    preferredTime: "",
    travelPurpose: "",
    interests: "",
    languages: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Import Supabase info
      const { projectId, publicAnonKey } = await import("../utils/supabase/info");
      
      // Prepare data to send
      const submitData = {
        ...formData,
        groupType: groupType || "solo",
      };
      
      console.log("Submitting traveler data:", submitData);
      
      // Send to backend
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-39a216a3/travelers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(submitData),
        }
      );
      
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit data");
      }
      
      console.log("Traveler registered successfully:", result);
      
      // Navigate to success page with ID
      navigate(`/success?id=${result.id}&type=traveler`);
    } catch (error) {
      console.error("Error submitting traveler form:", error);
      alert(`정보 제출 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-12">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/select-type")}
            className="flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)"
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            돌아가기
          </button>

          {/* Form Card */}
          <div
            className="bg-white rounded-3xl p-8 lg:p-12"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
            }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 42px)",
                  fontWeight: "700",
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                  marginBottom: "12px"
                }}
              >
                여행객 정보 등록
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)"
                }}
              >
                {groupType === "group" 
                  ? "대표자님의 정보를 입력해주세요" 
                  : "매칭을 위한 정보를 입력해주세요"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Group Size Selection - Only for groups */}
              {groupType === "group" && (
                <div className="space-y-4 pb-6 border-b-2" style={{ borderColor: "var(--bg-gray)" }}>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "var(--brand-purple)",
                      marginBottom: "16px"
                    }}
                  >
                    그룹 인원
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, groupSize: "2" })}
                      className="p-6 rounded-3xl border-2 transition-all"
                      style={{
                        borderColor: formData.groupSize === "2" ? "var(--brand-purple)" : "var(--bg-gray)",
                        backgroundColor: formData.groupSize === "2" ? "var(--bg-light-gray)" : "white",
                        cursor: "pointer"
                      }}
                    >
                      <div className="text-center">
                        <div
                          style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            color: formData.groupSize === "2" ? "var(--brand-purple)" : "var(--text-primary)",
                            marginBottom: "8px"
                          }}
                        >
                          2명
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "var(--text-secondary)"
                          }}
                        >
                          2인 그룹
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, groupSize: "3" })}
                      className="p-6 rounded-3xl border-2 transition-all"
                      style={{
                        borderColor: formData.groupSize === "3" ? "var(--brand-purple)" : "var(--bg-gray)",
                        backgroundColor: formData.groupSize === "3" ? "var(--bg-light-gray)" : "white",
                        cursor: "pointer"
                      }}
                    >
                      <div className="text-center">
                        <div
                          style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            color: formData.groupSize === "3" ? "var(--brand-purple)" : "var(--text-primary)",
                            marginBottom: "8px"
                          }}
                        >
                          3명
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "var(--text-secondary)"
                          }}
                        >
                          3인 그룹
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        opacity: 0.8,
                        lineHeight: "1.5"
                      }}
                    >
                      ℹ️ 그룹 여행의 경우 대표자 1명의 정보만 입력해주세요
                    </p>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="space-y-4">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "var(--brand-purple)",
                    marginBottom: "16px"
                  }}
                >
                  {groupType === "group" ? "대표자 기본 정보" : "기본 정보"}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">이름 (Name) *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="홍길동 / John Doe"
                      required
                      className="rounded-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="age">나이 (Age) *</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="25"
                      required
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender">성별 (Gender) *</Label>
                    <Input
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      placeholder="남성 / Male, 여성 / Female"
                      required
                      className="rounded-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="nationality">국적 (Nationality) *</Label>
                    <Input
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="대한민국 / United States"
                      required
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="snsId">SNS 아이디 (SNS ID) *</Label>
                  <Input
                    id="snsId"
                    name="snsId"
                    value={formData.snsId}
                    onChange={handleChange}
                    placeholder="Instagram: @username 또는 KakaoTalk: ID"
                    required
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Travel Information */}
              <div className="space-y-4 pt-6">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "var(--brand-purple)",
                    marginBottom: "16px"
                  }}
                >
                  여행 정보
                </div>

                <div>
                  <Label htmlFor="stayDuration" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    체류 기간 (Stay Duration) *
                  </Label>
                  <Input
                    id="stayDuration"
                    name="stayDuration"
                    value={formData.stayDuration}
                    onChange={handleChange}
                    placeholder="2024년 1월 15일 ~ 1월 20일"
                    required
                    className="rounded-full"
                  />
                </div>

                <div>
                  <Label htmlFor="preferredLocation" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    희망 장소 (Preferred Location) *
                  </Label>
                  <Input
                    id="preferredLocation"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    placeholder="홍대, 강남, 인사동 등"
                    required
                    className="rounded-full"
                  />
                </div>

                <div>
                  <Label htmlFor="preferredTime" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    희망 시간 (Preferred Time) *
                  </Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="오후 2시 ~ 6시"
                    required
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4 pt-6">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "var(--brand-purple)",
                    marginBottom: "16px"
                  }}
                >
                  추가 정보
                </div>

                <div>
                  <Label htmlFor="travelPurpose" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    여행 목적 (Travel Purpose) *
                  </Label>
                  <Textarea
                    id="travelPurpose"
                    name="travelPurpose"
                    value={formData.travelPurpose}
                    onChange={handleChange}
                    placeholder="예: 한국 문화 체험, 언어 교환, 로컬 맛집 탐방 등"
                    required
                    className="rounded-2xl min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="interests">관심사 (Interests)</Label>
                  <Input
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="K-pop, 음식, 사진, 쇼핑 등"
                    className="rounded-full"
                  />
                </div>

                <div>
                  <Label htmlFor="languages">가능한 언어 (Languages) *</Label>
                  <Input
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="영어, 일본어, 중국어 등"
                    required
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full transition-all"
                  style={{
                    backgroundColor: "var(--brand-purple)",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0px 8px 24px rgba(122, 84, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  정보 제출하기
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="text-center pt-4">
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    opacity: 0.7,
                    lineHeight: "1.5"
                  }}
                >
                  제출하신 정보는 안전하게 보관되며,<br />
                  매칭 목적으로만 사용됩니다.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
