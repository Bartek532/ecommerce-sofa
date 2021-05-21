import { useMainContext } from "context/MainContext";
import Image from "next/image";
import {
  StyledModalWrapper,
  StyledModalWindow,
  StyledModalHeading,
  StyledModalDescription,
  StyledModalBtn,
} from "./Modal.styles";

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
