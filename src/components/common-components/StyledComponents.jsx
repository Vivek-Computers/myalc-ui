import styled, { keyframes } from "styled-components";

export const NotificationBalloon = styled.sup`
  background-color: var(--site-red);
  color: var(--white);
  width: 5px;
`;

export const GradientContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(193, 193, 255, 1) 35%,
    rgba(248, 212, 212, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * ==============================================
 * Dot Flashing
 * ==============================================
 */
const getLoadingColor = (variant = "") => {
  if (variant.toLowerCase().includes("secondary")) {
    return "var(--c-secondary-hover)";
  }

  if (variant.toLowerCase().includes("success")) {
    return "var(--c-success-hover)";
  }

  if (variant.toLowerCase().includes("warning")) {
    return "var(--c-warning-hover)";
  }

  if (variant.toLowerCase().includes("danger")) {
    return "var(--c-danger-hover)";
  }

  if (variant.toLowerCase().includes("info")) {
    return "var(--c-info-hover)";
  }

  if (variant.toLowerCase().includes("light")) {
    return "var(--c-light-hover)";
  }

  if (variant.toLowerCase().includes("dark")) {
    return "var(--c-dark-hover)";
  }

  return "var(--c-primary-hover)";
};

const dotFlashingAnimation = (variant) => keyframes`
  0% {
    background-color: ${getLoadingColor(variant)};
  }
  50%,
  100% {
    background-color: #ebe6ff;
  }
`;

const Loading = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ variant }) => getLoadingColor(variant)};
  color: ${({ variant }) => getLoadingColor(variant)};
  animation: ${({ variant }) => dotFlashingAnimation(variant)} 1s infinite
    linear alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ variant }) => getLoadingColor(variant)};
    color: ${({ variant }) => getLoadingColor(variant)};
    animation: ${({ variant }) => dotFlashingAnimation(variant)} 1s infinite
      alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ variant }) => getLoadingColor(variant)};
    color: ${({ variant }) => getLoadingColor(variant)};
    animation: ${({ variant }) => dotFlashingAnimation(variant)} 1s infinite
      alternate;
    animation-delay: 1s;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  min-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  z-index: 1;
`;

export const ButtonLoading = ({ variant = "" }) => (
  <LoadingContainer>
    <Loading variant={variant} />
  </LoadingContainer>
);
