import { useRef, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  max-width: 35rem;
  margin: 2rem auto;
`;

const StyledInput = styled.input`
  width: 6rem;
  margin: 0 1rem;
  padding: 0;
`;

const StyledTable = styled.table.attrs(props => ({
  id: props.id
}))`
  vertical-align: middle;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  th {
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;
    border: 1px solid black;
  }
  td {
    text-align: right;
    border: 1px solid black;
    white-space: nowrap;
  }
  td:before {
    content: "";
    display: block;
    width: 5em;
  }
`;

export default function Index() {
  const [value, setValue] = useState("");
  const inputElement = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    setValue(inputElement.current.value);
  }

  return (
    <>
      <StyledDiv>
        <form>
          <label for="totalRate">
            Total Rate:
            <StyledInput type="text" id="totalRateInput" ref={inputElement} />
            ml/hr
            <input
              id="submitButton"
              type="submit"
              value="Calculate"
              onClick={handleClick}
            />
          </label>
        </form>
        <StyledTable>
          <tr>
            <th>Blood Glucose</th>
            <th colspan="2">Saline Rate</th>
            <th colspan="2">Dextrose Rate</th>
          </tr>
          <colgroup>
            <col span="1" style={{ width: "1rem" }} />
            <col span="1" style={{ width: "1.5rem" }} />
            <col span="1" style={{ minWidth: "4rem" }} />
            <col span="1" style={{ width: "1.5rem" }} />
            <col span="1" style={{ width: "3.5rem" }} />
          </colgroup>
          <tr>
            <td className="right">>300</td>
            <td>100% = </td>
            <td>{value} mL/hr</td>
            <td>0% = </td>
            <td>{value - value} mL/hr</td>
          </tr>
          <tr>
            <td className="right">250-299</td>
            <td>75% = </td>
            <td>{value * 0.75} mL/hr</td>
            <td>25% = </td>
            <td>{value * 0.25} mL/hr</td>
          </tr>
          <tr>
            <td className="right">200-249</td>
            <td>50% = </td>
            <td>{value * 0.5} mL/hr</td>
            <td>50% = </td>
            <td>{value * 0.5} mL/hr</td>
          </tr>
          <tr>
            <td className="right">150-199</td>
            <td>25% = </td>
            <td>{value * 0.25} mL/hr</td>
            <td>75% = </td>
            <td>{value * 0.75} mL/hr</td>
          </tr>
          <tr>
            <td className="right">&lt; 150</td>
            <td>0% = </td>
            <td>{value - value} mL/hr</td>
            <td>100% = </td>
            <td>{value} mL/hr</td>
          </tr>
        </StyledTable>
      </StyledDiv>
    </>
  );
}
