import { BBSData } from "../types/types";
import { BBSCard } from "./BBSCard";

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}

export const BBSCardList = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <>
      {bbsAllData.map((bbsData: BBSData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </>
  );
};
