import styled from "styled-components/macro";

export default function Flex({
  direction = "column",
  justify = "center",
  align = "center",
  gap = "1.5rem",
  className,
  children,
  as,
  type = "local",
}) {
  const Component = type === "local" ? FlexLocalStyle : FlexGlobalStyle;
  return (
    <Component {...{ type, className, as, direction, justify, align, gap }}>
      {children}
    </Component>
  );
}

//give as="" attribute while calling to change div to someother tag
const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ direction, gap }) =>
    direction === "column" ? `${gap} 0rem` : `0rem ${gap}`};
`;

const FlexLocalStyle = styled(FlexStyle)``;

const FlexGlobalStyle = styled(FlexStyle)`
  width: 100%;
`;
