import {
  EyeIcon,
  PhoneIcon,
  ChatIcon,
  ShareIcon,
  ThumbDownIcon,
} from "@heroicons/react/outline";

const PostDetailStats = ({ postViews = 0, phoneViews = 0, lineViews = 0 }) => {
  const stats = [
    {
      id: 1,
      name: "เข้าชม",
      stat: postViews,
      icon: EyeIcon,
    },
    {
      id: 2,
      name: "คลิกดูเบอร์",
      stat: phoneViews,
      icon: PhoneIcon,
    },
    {
      id: 3,
      name: "คลิกดูไลน์",
      stat: lineViews,
      icon: ChatIcon,
    },
    {
      id: 4,
      name: "แชร์",
      stat: 0,
      icon: ShareIcon,
    },
    {
      id: 5,
      name: "ถูกรายงาน",
      stat: 0,
      icon: ThumbDownIcon,
    },
  ];

  return (
    <div className="bg-white shadow sm:rounded-lg p-4">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        ข้อมูลเชิงสถิติ
      </h3>

      <dl className="m-3 gap-2 grid grid-cols-2 ">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow  sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-xs font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default PostDetailStats;
