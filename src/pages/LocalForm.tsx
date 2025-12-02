import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { ArrowLeft, MapPin, Clock, Users, Languages } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function LocalForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const groupType = searchParams.get("type"); // "solo" or "group"

  const [formData, setFormData] = useState({
    groupSize: "2", // 그룹일 때 인원수 (2 or 3)
    name: "",
    age: "",
    gender: "",
    snsId: "",
    location: "",
    availableTime: "",
    purpose: "",
    languages: "",
    interests: "",
    experience: ""
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
      
      console.log("Submitting local data:", submitData);
      
      // Send to backend
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-39a216a3/locals`,
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
      
      console.log("Local registered successfully:", result);
      
      // Navigate to success page with ID
      navigate(`/success?id=${result.id}&type=local`);
    } catch (error) {
      console.error("Error submitting local form:", error);
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
                현지인 정보 등록
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
                      ℹ️ 그룹의 경우 대표자 1명의 정보만 입력해주세요
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
                    <Label htmlFor="name">이름 *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="김철수"
                      required
                      className="rounded-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="age">나이 *</Label>
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

                <div>
                  <Label htmlFor="gender">성별 *</Label>
                  <Input
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder="남성, 여성"
                    required
                    className="rounded-full"
                  />
                </div>

                <div>
                  <Label htmlFor="snsId">SNS 아이디 *</Label>
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

              {/* Availability Information */}
              <div className="space-y-4 pt-6">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "var(--brand-purple)",
                    marginBottom: "16px"
                  }}
                >
                  활동 정보
                </div>

                <div>
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    활동 가능 지역 *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="서울 강남구, 홍대 등"
                    required
                    className="rounded-full"
                  />
                </div>

                <div>
                  <Label htmlFor="availableTime" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    활동 가능 시간 *
                  </Label>
                  <Input
                    id="availableTime"
                    name="availableTime"
                    value={formData.availableTime}
                    onChange={handleChange}
                    placeholder="평일 저녁 6시 이후, 주말 오후 등"
                    required
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Language & Purpose */}
              <div className="space-y-4 pt-6">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "var(--brand-purple)",
                    marginBottom: "16px"
                  }}
                >
                  언어 & 목적
                </div>

                <div>
                  <Label htmlFor="languages" className="flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    가능한 언어 *
                  </Label>
                  <Input
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="한국어(네이티브), 영어(중급), 일본어(초급) 등"
                    required
                    className="rounded-full"
                  />
                </div>

                <div>
                  <Label htmlFor="purpose" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    참여 목적 *
                  </Label>
                  <Textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="예: 영어 회화 연습, 문화 교류, 외국인 친구 사귀기 등"
                    required
                    className="rounded-2xl min-h-[100px]"
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
                  <Label htmlFor="interests">관심사</Label>
                  <Input
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="K-pop, 카페, 전통문화, 맛집 탐방 등"
                    className="rounded-full"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">외국인 친구 사귄 경험</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="이전에 외국인 친구를 사귀거나 문화 교류 프로그램에 참여한 경험이 있다면 적어주세요 (선택사항)"
                    className="rounded-2xl min-h-[100px]"
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
