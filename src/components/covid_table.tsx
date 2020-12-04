import { useRecoilValue } from 'recoil';
import { MonthList } from '../config/month';
import { covidState } from '../recoil/covid_recoils';

export interface CovidTableProps {
  countryISO2: string;
}

function CovidTable(props: CovidTableProps) {
  const { countryISO2 } = props;
  const covidData = useRecoilValue(covidState(countryISO2));
  const cases = covidData?.cases;

  return cases ? (
    <div>
      <h2>TABLE</h2>
      {Array.from(cases.entries()).map(([month, value]) => {
        return <p key={month.toString()}>{`${MonthList[month]} : ${value}`}</p>;
      })}
    </div>
  ) : null;
}

export default CovidTable;
