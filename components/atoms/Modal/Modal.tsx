import styled from "styled-components";
import { useMainContext } from "../../../context/MainContext";
import Image from "next/image";

const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: grid;
  place-items: center;
`;

const StyledModalWindow = styled.div`
  width: 90%;
  max-width: 40rem;
  background-color: var(--white-100);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding-top: 3rem;
  border-radius: 0.6rem;
`;

const StyledModalHeading = styled.h2`
  font-weight: 700;
  margin: 2rem 0 1.5rem 0;
  font-size: 3rem;
`;

const StyledModalDescription = styled.div`
  text-align: center;
  font-size: 1.4rem;
  margin: 0.6rem 0;
  line-height: 2rem;
  padding: 0 3.5rem;
`;

const StyledModalBtn = styled.button`
  width: 100%;
  border: 0 none;
  background-color: ${props =>
    props.color === "error" ? "var(--red-100)" : "var(--green-100)"};
  color: var(--white-100);
  padding: 1.5rem 0;
  font-size: 1.3rem;
  font-family: inherit;
  text-transform: uppercase;
  margin-top: 1.7rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  border-radius: 0 0 0.6rem 0.6rem;
  cursor: pointer;
`;

export const Modal = () => {
  const {
    modal,
    modal: { isOpen, type, message },
    setModal,
  } = useMainContext();

  const handleCloseModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <StyledModalWrapper>
      <StyledModalWindow>
        <Image width="75" height="75" src={`/svg/modal/${type}.svg`} />
        <StyledModalHeading>
          {type === "error" ? "Oh snap!" : "Yeah!"}
        </StyledModalHeading>
        <StyledModalDescription>{message}</StyledModalDescription>
        <StyledModalBtn color={type} onClick={handleCloseModal}>
          Close
        </StyledModalBtn>
      </StyledModalWindow>
    </StyledModalWrapper>
  );
};
