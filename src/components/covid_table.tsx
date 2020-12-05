import { useRecoilValue } from 'recoil';
import { MonthList } from '../enum/month';
import { covidState } from '../recoil/covid_recoils';

export interface CovidTableProps {
  countryISO2: string;
}

function CovidTable(props: CovidTableProps) {
  const { countryISO2 } = props;
  const covidData = useRecoilValue(covidState(countryISO2));
  const cases = covidData?.cases;

  return cases ? (
    <div className="CovidTable">
      <h2>COVID-19 reported</h2>
      <table>
        <tbody>
          <tr>
            {Array.from(cases.keys()).map((key) => (
              <th key={'key' + key}>{MonthList[key]}</th>
            ))}
          </tr>
          <tr>
            {Array.from(cases.values()).map((value, i) => (
              <td key={'value' + i}>{value.toLocaleString()}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  ) : null;
}

export default CovidTable;
