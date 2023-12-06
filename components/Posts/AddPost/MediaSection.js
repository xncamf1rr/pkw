import { getYoutubeVideoId } from "../../../libs/string-utils";
import TextInput from "../../UI/Public/Inputs/TextInput";
import UploadImagesInput from "../../UI/Public/Inputs/UploadImagesInput/UploadImagesInput";
import YoutubeIframe from "../../UI/Public/YoutubeIframe";

const MediaSection = ({
  register,
  unregister,
  watch,
  setValue,
  errors,
  submitCount,
}) => {
  console.log("MediaSection");

  const watchVideo = watch("video");

  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          {/* <h3 className="text-lg font-medium leading-6 text-gray-900">
            รูปภาพ&วิดีโอ
          </h3> */}
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            รูปภาพ
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            คุณสามารถอัพโหลดรูปภาพได้จำนวน 3-5 รูปต่อ 1 ประกาศ
          </p>
        </div>

        <div className="mt-5 space-y-6 md:mt-0 md:col-span-2">
          <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <UploadImagesInput
                id="images"
                label="รูปภาพ"
                maxFile={5}
                register={() =>
                  register("images", {
                    required: "กรุณาอัพโหลดภาพของประกาศจำนวน 3-10 ภาพ",
                    validate: (value) => {
                      if (value?.length < 3 || value?.length > 15) {
                        return "กรุณาอัพโหลดภาพของประกาศจำนวน 3-10 ภาพ";
                      }
                    },
                  })
                }
                unregister={unregister}
                error={errors?.images}
                setValue={setValue}
                submitCount={submitCount}
              />
            </div>
          </div>

          {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="text-center w-full">
              <div className="col-span-6">
                <TextInput
                  id="video"
                  label="วิดีโอ"
                  placeholder="https://www.youtube.com/watch?v=video1"
                  register={() =>
                    register("video", {
                      validate: (inputUrl) => {
                        if (inputUrl) {
                          const youtubeVideoId = getYoutubeVideoId(inputUrl);
                          return youtubeVideoId
                            ? true
                            : "ลิงค์ youtube video ไม่ถูกต้อง";
                        } else {
                          return true;
                        }
                      },
                    })
                  }
                  unregister={unregister}
                  error={errors.video}
                >
                  <p className="text-xs text-gray-500">
                    ถ้าต้องการแสดงวิดีโอบนประกาศ คุณสามารถ Copy ลิงค์วิดีโอจาก
                    youtube มาวางได้
                  </p>
                </TextInput>
              </div>
              <div>
                <YoutubeIframe youtubeUrl={watchVideo} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
