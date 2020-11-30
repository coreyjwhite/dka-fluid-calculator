import PropTypes from "prop-types";
import styled from "styled-components";
import m from "styles/measures";
import s from "styles/styles";

const StyledDiv = styled.div.attrs(props => ({
  id: `${props.id}Card`,
  className: "card"
}))`
  display: flex;
  flex-flow: row wrap;
  width: ${m.col12};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "flex-start"};
  height: ${props => props.height || "fit-content"};
  min-height: ${m.sp13};
  margin: ${props => props.margin || `${m.sp4} 0`};
  padding: ${props => props.padding || m.sp3};
  border-radius: ${s.borderRadius};
  box-shadow: ${s.elev3};
  background: ${props => props.bg || "#FFF"};
  @media (min-width: ${m.devMd}) {
    width: ${props => props.width || m.col12};
    margin: ${m.sp4};
  }
`;

const StyledH = styled.h3.attrs(props => ({
  id: `${props.id}CardHeading`,
  className: "cardHeading"
}))`
  width: ${m.col12};
  height: ${m.sp7};
  margin: ${m.sp4} ${m.sp5} 0;
  font-weight: 600;
`;

function getCardHeading(id, heading) {
  if (heading) {
    return <StyledH id={id}>{heading}</StyledH>;
  }
}

export default function Card(props) {
  return (
    <>
      {getCardHeading(props.id, props.heading)}
      <StyledDiv
        id={props.id}
        className={props.className}
        align={props.align}
        bg={props.bg}
        height={props.height}
        justify={props.justify}
        margin={props.margin}
        padding={props.padding}
        width={props.width}
      >
        {props.children}
      </StyledDiv>
    </>
  );
}

Card.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
  bg: PropTypes.string,
  heading: PropTypes.string,
  height: PropTypes.string,
  justify: PropTypes.string,
  width: PropTypes.string
};
