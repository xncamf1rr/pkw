const SettingSection = () => {
  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            ตั้งค่าประกาศ
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Decide which communications you&lsquo;d like to receive and how.
          </p>
        </div>
        <div className="mt-5 space-y-6 md:mt-0 md:col-span-2">
          <fieldset>
            <legend className="sr-only">By Email</legend>
            <div
              className="text-base font-medium text-gray-900"
              aria-hidden="true"
            >
              By Email
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="h-5 flex items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    Comments
                  </label>
                  <p className="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="candidates"
                    className="font-medium text-gray-700"
                  >
                    Candidates
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Offers
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend className="contents text-base font-medium text-gray-900">
              Push Notifications
            </legend>
            <p className="text-sm text-gray-500">
              These are delivered via SMS to your mobile phone.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="push-everything"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Everything
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="push-email"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Same as email
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="push-nothing"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SettingSection;
