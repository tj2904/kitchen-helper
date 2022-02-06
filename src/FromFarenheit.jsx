import "./TemperatureConversion.css";

function FromFarenheit(props) {
  return (
    <div class="">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Measure</th>
            <th scope="col">Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Celcius</td>
            <td>
              {Math.ceil(((props.orginal - 32) * 5/9) /5) * 5} <sup>o</sup>C
            </td>
          </tr>
          <tr>
            <td>Celcius (Fan)</td>
            <td>
            {Math.ceil((((props.orginal -20) - 32) * 5/9) /5) * 5} <sup>o</sup>C
            </td>
          </tr>

          <tr>
            <td>Farenheit</td>
            <td>
            {props.orginal} <sup>o</sup>F
            </td>
          </tr>
          {/* <tr>
            <td>Gas Mark</td>
            <td>? </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
export default FromFarenheit;
