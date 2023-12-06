import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { getAssetType } from "../../../libs/mappers/assetTypeMapper";
import { getPostType } from "../../../libs/mappers/postTypeMapper";
import { getPriceUnit } from "../../../libs/mappers/priceUnitMapper";

const SimilarPostItem = ({
  id,
  postType,
  assetType,
  condition,
  title,
  slug,
  thumbnail,
  thumbnailAlt,
  price,
  priceUnit,
  address,
  specs,
  isStudio,
}) => {
  const priceWithFormat = useMemo(() => price?.toLocaleString(), [price]);

  const postLink = useMemo(() => `/property/${slug}`, [slug]);
  const postTypeFormat = useMemo(() => getPostType(postType), [postType]);
  const assetTypeFormat = useMemo(() => getAssetType(assetType), [assetType]);
  const priceUnitFormat = useMemo(
    () => (priceUnit ? ` / ${getPriceUnit(priceUnit)}` : ""),
    [priceUnit]
  );

  return (
    <li className="w-1/2 p-2 group">
      <Link href={postLink}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-white shadow-md cursor-pointer transition-all group-hover:shadow-xl group-hover:bg-gray-50"
        >
          <div className="relative w-full overflow-hidden rounded-md ">
            <span className="absolute top-1 bg-gray-lighter py-0.5 px-2 text-sm text-gray-hard z-20 shadow-md rounded-r-md">
              {postTypeFormat + assetTypeFormat}
            </span>
            {/* <Image
              src={thumbnail}
              alt={thumbnailAlt}
              className="w-full h-full object-center object-cover transition-all ease-linear group-hover:scale-125 z-10 rounded-md group-hover:rounded-md"
              width={250}
              height={192}
              layout="responsive"
            /> */}
            <img
              src={thumbnail}
              alt={thumbnailAlt}
              className="w-[200px] h-[150px] object-center object-cover transition-all ease-linear group-hover:scale-125 z-10 rounded-md group-hover:rounded-md"
            ></img>
            <div className="right-0 bottom-0 text-primary z-10">
              <span className="text-md">฿{priceWithFormat}</span>
              <span className="text-sm">{priceUnitFormat}</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default SimilarPostItem;
