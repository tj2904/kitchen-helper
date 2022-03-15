import "./TemperatureConversion.css";

function FromCelsius(props) {
  return (
    <div className="">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Measure</th>
            <th scope="col">Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr class="font-italic">
            <td>Celsius</td>
            <td>
              {props.orginal} <sup>o</sup>C
            </td>
          </tr>

          <tr>
            <td>Celsius (Fan)</td>
            <td>
              {props.orginal * 1 - 20} <sup>o</sup>C
            </td>
          </tr>

          <tr>
            <td>Fahrenheit</td>
            <td>
              {Math.ceil(((props.orginal * 9) / 5 + 32) / 5) * 5} <sup>o</sup>F
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
export default FromCelsius;
