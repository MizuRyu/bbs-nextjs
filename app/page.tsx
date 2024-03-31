import { BBSCardList } from "./components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  // ローカルホスト直書き
  // TODO: urlを環境変数化
  const url = "http://localhost:3000/api/post";
  const response = await fetch(url, {
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
