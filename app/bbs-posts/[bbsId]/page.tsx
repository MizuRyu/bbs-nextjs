import { BBSData } from "@/app/types/types";
import Link from "next/link";

// BBSの記事データ取得
async function getDetailBBS(id: number) {
  // TODO: urlを環境変数化
  const url = `http://localhost:3000/api/post/${id}`;
  const response = await fetch(url, {
    cache: "no-store",
  });

  const bbsDetailsData: BBSData = await response.json();
  return bbsDetailsData;
}

const BBSDetailPage = async ({ params }: { params: { bbsId: number } }) => {
  const bbsDetailsData = await getDetailBBS(params.bbsId);
  const { title, content, username } = bbsDetailsData;
  console.log(bbsDetailsData);
  return (
    <div className="mx-auto max-w-4xl p-4 ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">{content}</p>
      </div>
      <div className="mb-8">
        <p className="text-gray-800">{username}</p>
      </div>

      <Link
        href={"/"}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      >
        戻る
      </Link>
    </div>
  );
};

export default BBSDetailPage;
