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
      <h3>COVID-19 Table by month</h3>
      <table>
        <tr>
          {Array.from(cases.keys()).map((key) => (
            <th key={'key' + key}>{MonthList[key]}</th>
          ))}
        </tr>
        <tr>
          {Array.from(cases.values()).map((value) => (
            <td key={'value' + value}>{value}</td>
          ))}
        </tr>
      </table>
    </div>
  ) : null;
}

export default CovidTable;